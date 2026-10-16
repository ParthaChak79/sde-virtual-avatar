"""Per-user settings, all read from .env (see .env.example). Nothing here is shared between users."""

import os
import sys

from dotenv import load_dotenv

load_dotenv()

HERE = os.path.dirname(os.path.abspath(__file__))


def _require(name: str) -> str:
    value = os.environ.get(name, "").strip()
    if not value:
        sys.exit(f"Missing {name}. Copy .env.example to .env and fill it in.")
    return value


SIMLI_API_KEY = _require("SIMLI_API_KEY")
SIMLI_FACE_ID = _require("SIMLI_FACE_ID")

if not os.environ.get("ANTHROPIC_API_KEY", "").strip():
    print(
        "Note: ANTHROPIC_API_KEY isn't set, so the worker will use whatever "
        "Claude Code is signed in with on this machine. Set your own key in .env "
        "if this will be used by anyone else."
    )

# The project the worker opens by default (this repo unless you point it elsewhere).
PROJECT_DIR = os.path.expanduser(os.environ.get("PROJECT_DIR") or HERE)
PROJECT_ID = os.path.basename(PROJECT_DIR.rstrip("/")) or "project"

# Where new projects created from the call page live.
AI_PROJECTS_DIR = os.path.expanduser(os.environ.get("AI_PROJECTS_DIR") or "~/AI Projects")
