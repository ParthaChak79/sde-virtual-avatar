"""Phase 3 (Simli) bridge -- replaces livetalking_bridge.py + the whole RunPod/
LiveTalking stack. Runs entirely on this Mac, next to the real project and the
Claude Code login, same as the worker itself.

Simli (simli.com) is a hosted "speech-to-video" API: whoever opens the WebRTC
connection to it both pushes audio in and receives the lip-synced video back
on the same connection -- there's no way to split "Python pushes audio" from
"browser views video" across two separate connections. So the browser page
does the Simli connection itself (via their JS SDK), and this script is a
small local web server that sits between the browser and the worker:

  browser (text in) --ws--> this server --> WorkerSession.send()
  WorkerSession on_speak(text) --> edge-tts (mp3) --> ffmpeg (PCM16/16kHz) -->
      this server --ws (binary chunks)--> browser --> simli-client.sendAudioData()

The Simli API key stays server-side; the browser only ever receives a
short-lived session_token minted via /session.

Run: python simli_bridge.py
Then open http://localhost:8765/ in a browser on this Mac or the same network.
"""

import asyncio
import hmac
import json
import tempfile
import os
import secrets

import edge_tts
from aiohttp import web
from dotenv import load_dotenv

from avatar_worker_session import SESSIONS

load_dotenv()

PROJECT_ID = "sde-virtual-avatar"
CWD = "/Users/partha/Downloads/SDE Virtual Avatar"

# Where new projects the avatar creates for you live. Picking a project on
# the page before joining the call is what tells this server which folder
# (and which persistent WorkerSession) to attach to -- see handle_ws.
AI_PROJECTS_DIR = os.path.expanduser("~/Downloads/AI Projects")

# project_id -> cwd, for every project the browser has seen via /projects.
# handle_ws looks the cwd up here rather than trusting a path from the
# browser directly, so a stray request can't point a worker at an arbitrary
# folder on disk.
KNOWN_PROJECTS: dict[str, str] = {PROJECT_ID: CWD}

SIMLI_API_KEY = os.environ["SIMLI_API_KEY"]
SIMLI_FACE_ID = "61141d2c-2729-42c3-8c72-86fae138667e"
SIMLI_COMPOSE_TOKEN_URL = "https://api.simli.ai/compose/token"
SIMLI_ICE_URL = "https://api.simli.ai/compose/ice"

LOCAL_HOST = "0.0.0.0"
LOCAL_PORT = 8765

TTS_VOICE = "en-US-AriaNeural"
AUDIO_CHUNK_SIZE = 6000

_AFFIRMATIVE = {"yes", "y", "yeah", "yep", "sure", "ok", "okay", "go", "go ahead", "confirm", "approved", "approve", "do it"}


def _looks_like_yes(text: str) -> bool:
    return text.strip().lower() in _AFFIRMATIVE


async def text_to_pcm16(text: str) -> bytes:
    """edge-tts produces mp3; Simli needs raw PCM16 mono @ 16kHz."""
    with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as mp3_file:
        mp3_path = mp3_file.name
    try:
        communicate = edge_tts.Communicate(text, TTS_VOICE)
        await communicate.save(mp3_path)

        proc = await asyncio.create_subprocess_exec(
            "ffmpeg", "-y", "-i", mp3_path, "-f", "s16le", "-ar", "16000", "-ac", "1", "-",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.DEVNULL,
        )
        pcm_bytes, _ = await proc.communicate()
        return pcm_bytes
    finally:
        os.unlink(mp3_path)


async def handle_session(request: web.Request) -> web.Response:
    """Mint a short-lived Simli session token + ICE servers for the browser."""
    import aiohttp

    async with aiohttp.ClientSession() as http:
        async with http.post(
            SIMLI_COMPOSE_TOKEN_URL,
            headers={"x-simli-api-key": SIMLI_API_KEY, "Content-Type": "application/json"},
            json={"faceId": SIMLI_FACE_ID, "apiVersion": "v2"},
        ) as resp:
            token_data = await resp.json()

        async with http.get(
            SIMLI_ICE_URL, headers={"x-simli-api-key": SIMLI_API_KEY}
        ) as resp:
            ice_servers = await resp.json()

    return web.json_response({"session_token": token_data.get("session_token"), "ice_servers": ice_servers})


async def handle_index(request: web.Request) -> web.FileResponse:
    return web.FileResponse(os.path.join(os.path.dirname(__file__), "simli_call.html"))


def _sanitize_project_name(name: str) -> str:
    """Reduce a user-typed project name to a safe folder name (no path traversal)."""
    name = os.path.basename(name.strip())
    return "" if name in ("", ".", "..") else name


async def handle_list_projects(request: web.Request) -> web.Response:
    """Existing project the browser can attach to: this project, plus anything under AI_PROJECTS_DIR."""
    os.makedirs(AI_PROJECTS_DIR, exist_ok=True)
    projects = [{"id": PROJECT_ID, "name": "This project (already open)", "cwd": CWD}]
    for entry in sorted(os.listdir(AI_PROJECTS_DIR)):
        full = os.path.join(AI_PROJECTS_DIR, entry)
        if os.path.isdir(full):
            KNOWN_PROJECTS[entry] = full
            projects.append({"id": entry, "name": entry, "cwd": full})
    return web.json_response(projects)


async def handle_create_project(request: web.Request) -> web.Response:
    """Make a new project folder under AI_PROJECTS_DIR for the avatar to work in."""
    body = await request.json()
    name = _sanitize_project_name(str(body.get("name", "")))
    if not name:
        return web.json_response({"error": "Please give the project a name."}, status=400)

    os.makedirs(AI_PROJECTS_DIR, exist_ok=True)
    path = os.path.join(AI_PROJECTS_DIR, name)
    os.makedirs(path, exist_ok=True)
    KNOWN_PROJECTS[name] = path
    return web.json_response({"id": name, "name": name, "cwd": path})


async def handle_ws(request: web.Request) -> web.WebSocketResponse:
    ws = web.WebSocketResponse(heartbeat=20)
    await ws.prepare(request)

    project_id = request.query.get("project", PROJECT_ID)
    cwd = KNOWN_PROJECTS.get(project_id, CWD)

    session, was_running = await SESSIONS.attach(project_id, cwd, on_speak=lambda t: None, on_activity=lambda t: None)
    session.auto_prompt_terminal = False

    # One lock per project (not one global lock) -- otherwise a slow reply in
    # one project's call would stall a totally unrelated project's call.
    session_locks: dict[str, asyncio.Lock] = request.app["session_locks"]
    session_lock = session_locks.setdefault(project_id, asyncio.Lock())

    opening = session.status_report() if was_running else "Hi, I'm ready to help. What would you like me to work on?"
    await ws.send_str(json.dumps({"type": "text", "text": opening}))
    await ws.send_bytes(await text_to_pcm16(opening))

    async for msg in ws:
        if msg.type != web.WSMsgType.TEXT:
            continue
        data = json.loads(msg.data)
        if data.get("type") != "user_text":
            continue
        text = data.get("text", "")

        if session.pending_confirmation is not None:
            session.resolve_pending_confirmation(_looks_like_yes(text))
            continue

        # Queue + dedicated drain task: on_speak/on_activity are sync callbacks
        # fired from inside WorkerSession's async code, so they can't await a
        # send directly. A plain create_task-per-utterance would let
        # ffmpeg/edge-tts timing reorder multiple utterances from one turn;
        # the queue keeps them in the order they happened.
        speak_queue: asyncio.Queue = asyncio.Queue()
        activity_queue: asyncio.Queue = asyncio.Queue()

        def on_speak_sync(utterance: str) -> None:
            speak_queue.put_nowait(utterance)

        def on_activity_sync(summary: str) -> None:
            activity_queue.put_nowait(summary)

        async def drain_speak() -> None:
            while True:
                utterance = await speak_queue.get()
                if utterance is None:
                    break
                await ws.send_str(json.dumps({"type": "text", "text": utterance}))
                pcm = await text_to_pcm16(utterance)
                await ws.send_bytes(pcm)

        async def drain_activity() -> None:
            while True:
                summary = await activity_queue.get()
                if summary is None:
                    break
                await ws.send_str(json.dumps({"type": "activity", "text": summary}))

        speak_task = asyncio.create_task(drain_speak())
        activity_task = asyncio.create_task(drain_activity())

        async with session_lock:
            session.on_speak = on_speak_sync
            session.on_activity = on_activity_sync
            try:
                await session.send(text)
            except Exception as e:
                await ws.send_str(json.dumps({"type": "error", "message": str(e)}))

        await speak_queue.put(None)
        await activity_queue.put(None)
        await speak_task
        await activity_task

    return ws


ACCESS_COOKIE = "avatar_access"


@web.middleware
async def require_access_token(request: web.Request, handler):
    """Gate every route behind the access token.

    The page can direct a worker that runs commands on this Mac, so being on
    the same network must not be enough to use it. The token arrives once in
    the URL (?token=...), gets swapped for a SameSite=Strict cookie, and every
    later request -- including the /ws upgrade -- is checked against it.
    """
    expected: str = request.app["access_token"]
    supplied = request.query.get("token") or request.cookies.get(ACCESS_COOKIE, "")
    if not hmac.compare_digest(supplied, expected):
        return web.Response(status=401, text="Access token required. Use the link printed when the server started.")

    response = await handler(request)
    if request.query.get("token") and not isinstance(response, web.WebSocketResponse):
        response.set_cookie(ACCESS_COOKIE, expected, httponly=True, samesite="Strict")
    return response


def main() -> None:
    access_token = os.environ.get("ACCESS_TOKEN") or secrets.token_urlsafe(24)
    app = web.Application(middlewares=[require_access_token])
    app["access_token"] = access_token
    app["session_locks"] = {}
    app.router.add_get("/", handle_index)
    app.router.add_get("/session", handle_session)
    app.router.add_get("/projects", handle_list_projects)
    app.router.add_post("/projects", handle_create_project)
    app.router.add_get("/ws", handle_ws)
    app.router.add_get(
        "/simli_client_bundle.js",
        lambda r: web.FileResponse(os.path.join(os.path.dirname(__file__), "simli_client_bundle.js")),
    )
    print(f"Starting the worker for {PROJECT_ID} at {CWD} ...")
    print(f"Open http://localhost:{LOCAL_PORT}/?token={access_token} in a browser to join the call.")
    web.run_app(app, host=LOCAL_HOST, port=LOCAL_PORT)


if __name__ == "__main__":
    main()
