"""Phase 2 bridge client -- runs on the business owner's own machine, next to
the real project files and the Claude Code login. LiveTalking (the GPU pod)
has neither, so it can't run the worker itself.

This script connects OUTBOUND to the LiveTalking pod's WebSocket bridge route
(through the same Cloudflare-proxied port the browser already uses, so no
inbound port/tunnel is needed here), and drives the Phase 0 worker with
whatever text arrives from the video call. Spoken replies are streamed back
over the same connection, where the pod's worker_bridge.py hands them to
LiveTalking's avatar_session.put_msg_txt(...) so the avatar speaks them.

Run: python livetalking_bridge.py
"""

import asyncio
import json

import websockets

from avatar_worker_session import SESSIONS

PROJECT_ID = "sde-virtual-avatar"
CWD = "/Users/partha/Downloads/SDE Virtual Avatar"

POD_HOST = "u1jz0rlgnkqjvb-8010.proxy.runpod.net"
BRIDGE_SECRET = "MkZKKpdmemNeRGq7MqYLFW3f1rgPXwtr"
BRIDGE_URL = f"wss://{POD_HOST}/workerws?secret={BRIDGE_SECRET}"

RECONNECT_DELAY = 5

_AFFIRMATIVE = {"yes", "y", "yeah", "yep", "sure", "ok", "okay", "go", "go ahead", "confirm", "approved", "approve", "do it"}


def _looks_like_yes(text: str) -> bool:
    return text.strip().lower() in _AFFIRMATIVE


async def handle_message(ws, session, data: dict, session_lock: asyncio.Lock) -> None:
    corr_id = data.get("id")
    text = data.get("text", "")

    # A confirmation reply must NOT wait for session_lock: the in-flight
    # send() that's blocked on this exact confirmation is the lock holder,
    # so waiting here would deadlock. Resolve it directly instead.
    if session.pending_confirmation is not None:
        session.resolve_pending_confirmation(_looks_like_yes(text))
        await ws.send(json.dumps({"id": corr_id, "type": "done"}))
        return

    out_queue: asyncio.Queue = asyncio.Queue()

    def speak(utterance: str) -> None:
        out_queue.put_nowait(utterance)

    async def drain() -> None:
        while True:
            utterance = await out_queue.get()
            if utterance is None:
                break
            await ws.send(json.dumps({"id": corr_id, "type": "speak", "text": utterance}))

    drain_task = asyncio.create_task(drain())

    async with session_lock:
        session.on_speak = speak
        try:
            await session.send(text)
        except Exception as e:
            await ws.send(json.dumps({"id": corr_id, "type": "error", "message": str(e)}))

    await out_queue.put(None)
    await drain_task
    await ws.send(json.dumps({"id": corr_id, "type": "done"}))


async def run() -> None:
    print(f"Starting the worker for {PROJECT_ID} at {CWD} ...")
    session, _ = await SESSIONS.attach(PROJECT_ID, CWD, on_speak=lambda t: None)
    session.auto_prompt_terminal = False
    session_lock = asyncio.Lock()

    while True:
        try:
            print(f"Connecting to the video call bridge at {POD_HOST} ...")
            async with websockets.connect(BRIDGE_URL) as ws:
                print("Bridge connected. Waiting for messages from the call...")
                async for raw in ws:
                    data = json.loads(raw)
                    if data.get("type") == "user_text":
                        asyncio.create_task(handle_message(ws, session, data, session_lock))
        except Exception as e:
            print(f"Bridge connection lost ({e}); retrying in {RECONNECT_DELAY}s...")
            await asyncio.sleep(RECONNECT_DELAY)


if __name__ == "__main__":
    asyncio.run(run())
