"""Phase 0 — the persistent worker behind the virtual employee.

One WorkerSession wraps one ClaudeSDKClient tied to one project directory.
It keeps running independent of any call: SessionManager hands out the same
session for the life of the process, a PreToolUse hook blocks on a spoken/
typed confirmation before anything risky runs (regardless of permission
mode), and a PostToolUse hook keeps a plain-English work log so reconnecting
can open with a status report instead of a blank prompt.
"""

from __future__ import annotations

import asyncio
import re
from dataclasses import dataclass, field
from datetime import datetime
from typing import Any, Callable

from claude_agent_sdk import (
    AssistantMessage,
    ClaudeAgentOptions,
    ClaudeSDKClient,
    HookMatcher,
    ResultMessage,
    TextBlock,
)

PLAIN_ENGLISH_APPENDIX = """
You are acting as a remote employee for a business owner who is not a
developer and will never read your code or terminal output directly — they
only hear/read what you say to them. Follow these rules on top of your
normal behavior:

- Never use technical jargon: no "API", "backend", "repository", "repo",
  "deploy", "dependency"/"dependencies", "schema", "database" (say "place
  that stores information" instead), "endpoint", "framework", "commit",
  "branch", "build", "compile", "null", "config", "environment variable",
  or similar. Describe everything in terms of what it does for the business
  or the customer. Example: say "I connected the app to a place that safely
  stores your customers' sign-ups" instead of "set up a Postgres database".
- When you are given a new task, do not start making changes right away.
  First describe, in plain English, what you plan to do and a rough time
  estimate (e.g. "This should take about 15 minutes"), then explicitly ask
  whether you should go ahead. Wait for a clear go-ahead before doing
  anything that changes files or runs commands.
- Before a step that will take a noticeable amount of time (searching many
  files, running a command, fetching something from the internet), say a
  brief line first so it doesn't go quiet — e.g. "Let me go check that."
- Keep replies short and conversational, like a status update you'd give
  out loud on a call, not a written report.
"""

_READ_ONLY_TOOLS = {
    "Read",
    "Glob",
    "Grep",
    "WebSearch",
    "TodoWrite",
    "NotebookRead",
    "BashOutput",
}

_NARRATE_BEFORE_TOOLS = {"Bash", "WebFetch", "Task"}

_RISKY_BASH_PATTERNS: list[tuple[str, str]] = [
    (r"\brm\s+(-\w*[rf]\w*[rf]?\w*|--recursive|--force)", "deletes files, possibly recursively and permanently"),
    (r"\brm\s+(?!.*--help)", "deletes a file — hard to undo once it's gone"),
    (r"\bunlink\s+|\bshred\b", "permanently removes a file"),
    (r"\bgit\s+push\b[^\n]*(--force\b|-f\b)", "force-pushes and could overwrite work already on the shared copy"),
    (r"\bgit\s+reset\s+--hard\b", "throws away uncommitted work with a hard reset"),
    (r"\bgit\s+branch\s+-D\b", "force-deletes a branch, including work that was never saved elsewhere"),
    (r"\bgit\s+clean\s+-\w*f", "permanently deletes files that were never saved"),
    (r"\bdrop\s+table\b", "permanently deletes a table of stored information"),
    (r"\bdrop\s+database\b", "permanently deletes an entire place where information is stored"),
    (r"\btruncate\s+table\b", "wipes out all the stored rows in a table"),
    (r"\bdelete\s+from\s+\w+\b(?!.*\bwhere\b)", "deletes stored records with nothing limiting which ones"),
    (r"\bshutdown\b|\breboot\b", "restarts or turns off the machine it runs on"),
    (r"\bmkfs\b|\bdd\s+if=", "can overwrite an entire disk"),
]
_RISKY_BASH_RE = [(re.compile(p, re.IGNORECASE), why) for p, why in _RISKY_BASH_PATTERNS]

_PROD_PATH_RE = re.compile(r"(?<![a-zA-Z0-9])(prod|production|live)(?![a-zA-Z0-9])", re.IGNORECASE)
_ENV_PATH_RE = re.compile(r"(?<![a-zA-Z0-9])\.env(?:\.[a-zA-Z0-9_-]+)?(?![a-zA-Z0-9])")


def _iter_strings(value: Any):
    if isinstance(value, str):
        yield value
    elif isinstance(value, dict):
        for v in value.values():
            yield from _iter_strings(v)
    elif isinstance(value, (list, tuple)):
        for v in value:
            yield from _iter_strings(v)


def classify_risk(tool_name: str, tool_input: dict[str, Any]) -> tuple[bool, str]:
    """Deterministic risk check for a tool call. Returns (is_risky, plain_english_reason).

    This is a backstop, not a suggestion to the model — it runs in a
    PreToolUse hook, which fires before permission-mode checks, so it catches
    dangerous calls even in acceptEdits/bypassPermissions mode. Extend the
    pattern lists as new gaps are found; keep reasons in plain English since
    they get spoken straight to a non-technical user.
    """
    tool_input = tool_input or {}

    if tool_name == "Bash":
        command = str(tool_input.get("command", ""))
        for pattern, why in _RISKY_BASH_RE:
            if pattern.search(command):
                return True, f"that command {why}"

    if tool_name not in _READ_ONLY_TOOLS:
        for s in _iter_strings(tool_input):
            if _ENV_PATH_RE.search(s):
                return True, f"that touches a file that likely holds passwords or private settings ({s})"
            if _PROD_PATH_RE.search(s):
                return True, f"that touches something that looks like it's already live for customers ({s})"

    return False, ""


def _summarize_tool_call(tool_name: str, tool_input: dict[str, Any]) -> str:
    tool_input = tool_input or {}
    if tool_name == "Bash":
        command = str(tool_input.get("command", "")).strip()
        if len(command) > 70:
            command = command[:67] + "..."
        return f"ran a command ({command})"
    if tool_name in ("Write", "Edit", "NotebookEdit"):
        path = tool_input.get("file_path") or tool_input.get("notebook_path") or "a file"
        return f"changed {path}"
    if tool_name == "Read":
        path = tool_input.get("file_path", "a file")
        return f"looked at {path}"
    if tool_name in ("Glob", "Grep"):
        return "searched through the project's files"
    if tool_name == "WebFetch" or tool_name == "WebSearch":
        return "looked something up online"
    return f"used {tool_name}"


@dataclass
class WorkLogEntry:
    summary: str
    timestamp: str = field(default_factory=lambda: datetime.now().strftime("%H:%M"))


_AFFIRMATIVE_RE = re.compile(
    r"^\s*(yes|yeah|yep|yup|sure|ok(ay)?|sounds good|go ahead|go for it|"
    r"do it|approved?|lgtm|proceed|let'?s go|start|please do)\b",
    re.IGNORECASE,
)


def _looks_like_approval(text: str) -> bool:
    return bool(_AFFIRMATIVE_RE.search(text.strip()))


class WorkerSession:
    """One persistent Claude Agent SDK session tied to one project directory."""

    def __init__(self, project_id: str, cwd: str, on_speak: Callable[[str], None] | None = None):
        self.project_id = project_id
        self.cwd = cwd
        self.on_speak: Callable[[str], None] = on_speak or (lambda text: print(text))
        self.mode: str = "plan"
        self.work_log: list[WorkLogEntry] = []
        self.pending_confirmation: asyncio.Future[bool] | None = None
        self.pending_confirmation_info: dict[str, Any] | None = None
        self.auto_prompt_terminal = True
        self._client: ClaudeSDKClient | None = None
        self._started = False

    def _speak(self, text: str) -> None:
        self.on_speak(text)

    async def start(self) -> None:
        if self._started:
            return
        hooks = {
            "PreToolUse": [HookMatcher(matcher=None, hooks=[self._pre_tool_use])],
            "PostToolUse": [HookMatcher(matcher=None, hooks=[self._post_tool_use])],
        }
        options = ClaudeAgentOptions(
            cwd=self.cwd,
            system_prompt={
                "type": "preset",
                "preset": "claude_code",
                "append": PLAIN_ENGLISH_APPENDIX,
            },
            permission_mode="plan",
            hooks=hooks,
        )
        self._client = ClaudeSDKClient(options)
        await self._client.connect()
        self._started = True

    async def stop(self) -> None:
        if self._client is not None:
            await self._client.disconnect()
        self._started = False

    async def _set_mode(self, mode: str) -> None:
        if self.mode == mode:
            return
        assert self._client is not None
        await self._client.set_permission_mode(mode)
        self.mode = mode

    async def send(self, user_text: str) -> None:
        """Feed one message to the worker and speak its reply as it streams in."""
        assert self._client is not None

        if self.mode == "plan" and _looks_like_approval(user_text):
            await self._set_mode("acceptEdits")

        await self._client.query(user_text)

        async for message in self._client.receive_response():
            if isinstance(message, AssistantMessage):
                for block in message.content:
                    if isinstance(block, TextBlock) and block.text.strip():
                        self._speak(block.text.strip())
            elif isinstance(message, ResultMessage):
                break

        if self.mode == "acceptEdits":
            await self._set_mode("plan")

    def status_report(self) -> str:
        """Plain-English summary for reconnects: what got finished, what's next."""
        if not self.work_log:
            return "I haven't started anything yet — what would you like me to work on?"

        recent = self.work_log[-8:]
        lines = "; ".join(f"{e.summary}" for e in recent)
        report = f"Since we last talked, here's what I did: {lines}."

        if self.pending_confirmation_info is not None:
            reason = self.pending_confirmation_info.get("reason", "something risky")
            report += f" I'm actually paused right now because I need your okay: {reason}."
        elif self.mode == "plan":
            report += " I'm caught up and waiting on you for what's next."

        return report

    def resolve_pending_confirmation(self, approved: bool) -> bool:
        """Resolve a blocked risky tool call from outside the hook (e.g. a voice reply)."""
        if self.pending_confirmation is not None and not self.pending_confirmation.done():
            self.pending_confirmation.set_result(approved)
            return True
        return False

    async def _request_confirmation(self, tool_name: str, tool_input: dict[str, Any], reason: str) -> bool:
        loop = asyncio.get_running_loop()
        future: asyncio.Future[bool] = loop.create_future()
        self.pending_confirmation = future
        self.pending_confirmation_info = {"tool_name": tool_name, "tool_input": tool_input, "reason": reason}

        self._speak(
            f"Hold on — before I do this, I need your okay: {reason}. "
            "Say or type 'yes' to let me continue, or 'no' to stop."
        )

        if self.auto_prompt_terminal:
            asyncio.create_task(self._terminal_confirmation_prompt(future))

        try:
            approved = await future
        finally:
            self.pending_confirmation = None
            self.pending_confirmation_info = None

        self._speak("Got it, continuing." if approved else "Okay, I'll stop there and won't do that.")
        return approved

    async def _terminal_confirmation_prompt(self, future: "asyncio.Future[bool]") -> None:
        if future.done():
            return
        answer = await asyncio.to_thread(input, "\n[NEEDS YOUR OK] type 'yes' to proceed, anything else to cancel: ")
        if not future.done():
            future.set_result(answer.strip().lower() in ("y", "yes", "go", "go ahead", "confirm", "approved", "approve"))

    async def _pre_tool_use(self, input_data, tool_use_id, context):
        tool_name = input_data.get("tool_name", "")
        tool_input = input_data.get("tool_input") or {}

        risky, reason = classify_risk(tool_name, tool_input)
        if risky:
            approved = await self._request_confirmation(tool_name, tool_input, reason)
            decision = "allow" if approved else "deny"
            return {
                "hookSpecificOutput": {
                    "hookEventName": "PreToolUse",
                    "permissionDecision": decision,
                    "permissionDecisionReason": (
                        f"Operator confirmed: {reason}" if approved else f"Operator declined: {reason}"
                    ),
                }
            }

        if tool_name in _NARRATE_BEFORE_TOOLS:
            self._speak("Let me go check on that.")

        return {}

    async def _post_tool_use(self, input_data, tool_use_id, context):
        tool_name = input_data.get("tool_name", "")
        tool_input = input_data.get("tool_input") or {}
        self.work_log.append(WorkLogEntry(summary=_summarize_tool_call(tool_name, tool_input)))
        return {}


class SessionManager:
    """Hands out one persistent WorkerSession per project, keyed by project_id."""

    def __init__(self):
        self._sessions: dict[str, WorkerSession] = {}

    async def get_or_create(self, project_id: str, cwd: str, on_speak: Callable[[str], None] | None = None) -> WorkerSession:
        session = self._sessions.get(project_id)
        if session is None:
            session = WorkerSession(project_id, cwd, on_speak=on_speak)
            await session.start()
            self._sessions[project_id] = session
        elif on_speak is not None:
            session.on_speak = on_speak
        return session

    async def attach(self, project_id: str, cwd: str, on_speak: Callable[[str], None] | None = None) -> tuple[WorkerSession, bool]:
        """Attach a call/terminal to a project's worker. Returns (session, was_already_running)."""
        was_running = project_id in self._sessions
        session = await self.get_or_create(project_id, cwd, on_speak=on_speak)
        return session, was_running

    def detach(self, project_id: str) -> None:
        """Detach a call from a project's worker. The worker keeps running."""
        session = self._sessions.get(project_id)
        if session is not None:
            session.on_speak = lambda text: None

    def resolve_pending_confirmation(self, project_id: str, approved: bool) -> bool:
        session = self._sessions.get(project_id)
        if session is None:
            return False
        return session.resolve_pending_confirmation(approved)


SESSIONS = SessionManager()
