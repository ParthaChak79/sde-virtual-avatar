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
import json
import tempfile
import os

import edge_tts
from aiohttp import web

from avatar_worker_session import SESSIONS

PROJECT_ID = "sde-virtual-avatar"
CWD = "/Users/partha/Downloads/SDE Virtual Avatar"

SIMLI_API_KEY = "1v5c5ywouar7hkgwmk2nqo"
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


async def handle_ws(request: web.Request) -> web.WebSocketResponse:
    ws = web.WebSocketResponse(heartbeat=20)
    await ws.prepare(request)

    session, was_running = await SESSIONS.attach(PROJECT_ID, CWD, on_speak=lambda t: None)
    session.auto_prompt_terminal = False
    session_lock: asyncio.Lock = request.app["session_lock"]

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

        # Queue + dedicated drain task: on_speak is a sync callback fired from
        # inside WorkerSession's async code, so it can't await a send directly.
        # A plain create_task-per-utterance would let ffmpeg/edge-tts timing
        # reorder multiple utterances from one turn; the queue keeps them in
        # the order they were spoken.
        speak_queue: asyncio.Queue = asyncio.Queue()

        def on_speak_sync(utterance: str) -> None:
            speak_queue.put_nowait(utterance)

        async def drain() -> None:
            while True:
                utterance = await speak_queue.get()
                if utterance is None:
                    break
                await ws.send_str(json.dumps({"type": "text", "text": utterance}))
                pcm = await text_to_pcm16(utterance)
                await ws.send_bytes(pcm)

        drain_task = asyncio.create_task(drain())

        async with session_lock:
            session.on_speak = on_speak_sync
            try:
                await session.send(text)
            except Exception as e:
                await ws.send_str(json.dumps({"type": "error", "message": str(e)}))

        await speak_queue.put(None)
        await drain_task

    return ws


def main() -> None:
    app = web.Application()
    app["session_lock"] = asyncio.Lock()
    app.router.add_get("/", handle_index)
    app.router.add_get("/session", handle_session)
    app.router.add_get("/ws", handle_ws)
    app.router.add_get(
        "/simli_client_bundle.js",
        lambda r: web.FileResponse(os.path.join(os.path.dirname(__file__), "simli_client_bundle.js")),
    )
    print(f"Starting the worker for {PROJECT_ID} at {CWD} ...")
    print(f"Open http://localhost:{LOCAL_PORT}/ in a browser to join the call.")
    web.run_app(app, host=LOCAL_HOST, port=LOCAL_PORT)


if __name__ == "__main__":
    main()
