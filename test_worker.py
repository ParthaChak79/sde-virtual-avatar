"""Phase 0 terminal harness — talk to the worker with plain input()/print(), no media.

Run: python test_worker.py
"""

import asyncio

from avatar_worker_session import SESSIONS
from config import PROJECT_DIR as CWD, PROJECT_ID


def speak(text: str) -> None:
    print(f"\nEmployee: {text}")


async def main() -> None:
    print("Connecting to your virtual employee...")
    session, was_running = await SESSIONS.attach(PROJECT_ID, CWD, on_speak=speak)

    if was_running:
        speak(session.status_report())
    else:
        speak("Hi, I'm ready to help. What would you like me to work on?")

    while True:
        try:
            user_text = await asyncio.to_thread(input, "\nYou: ")
        except (EOFError, KeyboardInterrupt):
            print("\nLeaving the worker running in the background. Bye!")
            break

        if not user_text.strip():
            continue
        if user_text.strip().lower() in ("exit", "quit"):
            print("Leaving the worker running in the background. Bye!")
            break

        await session.send(user_text)


if __name__ == "__main__":
    asyncio.run(main())
