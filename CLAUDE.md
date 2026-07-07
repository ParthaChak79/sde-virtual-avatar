# Virtual Coding Employee — Project Brief

## The idea

I'm a business owner, not a developer. I want a virtual employee I talk to
over video calls — the same way I'd manage a real remote engineer. I give
tasks, they think, plan, ask questions, do the work, and report back next
time we talk. I don't watch the screen while they work; I check in.

The "employee" is a real Claude Code session (via the Claude Agent SDK) that
can actually read files, write code, and run commands in my project. The
"video call" is a self-hosted digital-human app (LiveTalking) that gives it
a face, a voice, and an actual browser page I can join.

**Build this in the order below.** Each phase has to work on its own before
the next one starts — do not skip ahead to the avatar's face/voice until the
core employee behavior is solid in a plain terminal.

---

## Architecture

```
 You (video call)                 Persistent worker (per project)
 ┌─────────────────┐              ┌────────────────────────────┐
 │ LiveTalking      │  text in →   │ ClaudeSDKClient session     │
 │ - mic + STT      │  ← speak     │ - Read/Write/Edit/Bash      │
 │ - TTS + lip sync │              │ - plan mode → acceptEdits   │
 │ - WebRTC video   │              │ - risk-flagging hook        │
 └─────────────────┘              │ - keeps running when you    │
        ↑ join/leave               │   hang up                  │
        |                          └────────────────────────────┘
    open a browser tab any time — the worker doesn't stop when you don't
```

Two things are deliberately decoupled:
1. **The worker** (a `ClaudeSDKClient` session) runs continuously per
   project, independent of any call — like an employee who keeps working
   after the meeting ends.
2. **The call** (LiveTalking) is something you dial into on demand and
   attach to that running worker. Hanging up doesn't stop the work.

---

## Build phases

### Phase 0 — the employee, no face or voice
Get a `ClaudeSDKClient`-based worker running and talking to me in a plain
terminal. No LiveTalking, no audio, no video yet.

**It must:**
- Keep one persistent session per project (`cwd` pointed at a real repo),
  not a fresh session per message.
- Start new tasks in `plan` permission mode: describe the plan and a rough
  time estimate in plain English, wait for a clear go-ahead, then switch to
  `acceptEdits` to actually execute (`client.set_permission_mode(...)`).
- **Never use technical jargon** (API, backend, repository, deploy,
  dependencies, schema, database, endpoint, framework, etc.). Describe
  everything in terms of what it does for the business or the customer —
  e.g. "I connected the app to a place that safely stores your customers'
  sign-ups," not "set up a Postgres database."
- Narrate briefly before slow operations so it doesn't feel like silence.
- On reconnect, open with a short status update structured like a real work
  report: what got finished, why it matters, what's next, anything needing
  a decision — before waiting for the next instruction.
- Flag risk **deterministically, not just via the prompt** — a `PreToolUse`
  hook should force an explicit spoken/typed go-ahead before anything hard
  to undo (`rm -rf`, force-pushes, dropped tables, deleting data) or
  anything touching what customers already use (paths hinting at
  `prod`/`production`/`.env`/`live`), regardless of what permission mode
  the session is in. This is a backstop the model can't accidentally skip
  by being confident — extend the pattern list as you find gaps.

**Done when:** I can give it a task in a terminal, get a plain-English plan,
approve it, watch it actually do the work, and trigger a risk heads-up on
purpose to confirm the backstop fires.

### Phase 1 — LiveTalking running standalone
Stand up LiveTalking (https://github.com/lipku/LiveTalking) with its own
bundled sample avatar and default chatbot — no connection to the Phase 0
worker yet. This is purely to prove the video-call mechanics work before
wiring anything to it.

**Important hardware note:** MuseTalk needs an NVIDIA GPU (CUDA). This
cannot run on a Mac. Deploy it to a rented Linux GPU box (e.g. a RunPod
RTX 4090 instance, on-demand pricing, shut down when not in use) rather
than the local dev machine.

**Done when:** I can open the LiveTalking web page in a browser, connect,
and see/hear its default avatar respond to typed or spoken input — using
its own built-in chatbot, unrelated to Claude Code.

### Phase 2 — wire the worker into LiveTalking
Only after Phase 0 and Phase 1 both work independently: replace
LiveTalking's own chatbot call in `app.py` with a call into the Phase 0
worker, so its mic/text input drives the real employee, and its avatar
speaks the employee's replies.

**Done when:** I can join the LiveTalking call, give it a task by voice, and
have the actual Claude Code worker plan it, ask for approval, do the work,
and report back — fully through the video call, no terminal involved.

### Phase 3 — polish (deferred until 0–2 work)
Custom avatar face (a real photo/video prepared for MuseTalk), a better
voice (swap edge-tts for a cloned voice via an open-source option like
XTTS), and the outbound "employee calls you" behavior for when it finishes
a task or gets stuck without you asking.

---

## Reference implementation (starting point, not gospel)

These were prototyped already and should be created as real files early in
Phase 0 — refine them as you build, don't treat them as final.

**`avatar_worker_session.py`** — the `SessionManager`/`WorkerSession`
classes: one persistent `ClaudeSDKClient` per project, a `PreToolUse` hook
that classifies risk (`classify_risk()`) and blocks on a spoken/typed
confirmation before proceeding, a `PostToolUse` hook that logs completions,
and the plain-English system prompt described above. Exposes
`SESSIONS.get_or_create()`, `SESSIONS.attach()`, `SESSIONS.detach()`, and
`SESSIONS.resolve_pending_confirmation()`.

**`test_worker.py`** — the Phase 0 terminal harness. Talks to
`avatar_worker_session.py` with plain `input()`/`print()`, no media.

**`livetalking_bridge.py`** — the Phase 2 patch. Defines
`claude_code_reply(text, nerfreal, project_id, cwd)` which feeds text into
the worker and calls LiveTalking's own `nerfreal.put_msg_txt(...)` to make
the avatar speak the reply — this is the one function that replaces
LiveTalking's default `llm_response(...)` call in its `app.py`.

If these files aren't already in the project, recreate them from this spec
rather than guessing at unrelated designs — the hook ordering (PreToolUse
runs before permission-mode checks, which is what makes the risk backstop
reliable even in `acceptEdits` mode) and the decoupled session/call
lifecycle are both load-bearing design decisions, not incidental details.

---

## Known open items to verify while building

- The exact request-handler code in LiveTalking's current `app.py` where
  its own LLM gets called may have shifted between versions — find the
  actual call site rather than assuming a line number.
- `classify_risk()`'s pattern list is a starting point. Add whatever's
  specific to this business (payment code, customer email sending, real
  user data) as gaps are found.
- Claude Agent SDK usage currently draws from the Claude subscription's
  usage limits rather than metered per-token billing — reconfirm this is
  still current before relying on it for cost planning.
- If the process restarts, in-memory `WorkerSession` state (work log,
  running session) is lost. Fine for now; worth persisting to disk once
  this moves past a prototype.

## Cost target

Everything open-source and self-hosted: local/free STT and TTS defaults,
a rented GPU only for the MuseTalk avatar rendering (billed by the second,
shut down when not testing), and LLM usage covered by the existing Claude
subscription rather than separate API billing. Recurring cost should be in
the single-digit dollars per month during development.
