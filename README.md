# SDE Virtual Avatar

An AI coding teammate you can video-call. You talk to a face on screen, it plans and does real programming work on your computer, and it keeps working after you hang up.

Built for non-developers: you manage it the way you'd manage a remote engineer. Give a task, get a plan, approve it, check back later.

## How it works

Two parts, deliberately kept separate:

1. **The worker** (`avatar_worker_session.py`): a persistent Claude Code session (Claude Agent SDK), one per project. It reads files, writes code and runs commands. It runs independently of any call.
2. **The call** (`simli_bridge.py` + `simli_call.html`): a [Simli](https://www.simli.com) digital-human avatar on a local web page. It handles voice and text in, spoken replies out, a live activity feed, and an embedded preview of any site the worker starts.

Closing the browser tab doesn't stop the work.

## Features

- Project picker: attach to an existing project or create a new one
- Talk or type (browser speech-to-text)
- Live plain-English activity feed
- Embedded preview of local sites the worker starts
- Plain-English replies only, no developer jargon
- Plan first: new tasks start in plan mode and wait for your go-ahead before any edits
- Access token: the page can't be used by anyone on your network without the link the server prints
- Restore points: a snapshot of the project is saved before each approved task (kept out of your normal history)
- Undo: say or type "undo that" (after a yes to confirm) to put the project back to how it was before the last task; repeat to go back further. Only covers tasks from the current server run
- Safety backstop: a deterministic hook asks for confirmation before deletions, force-pushes, database drops, or anything touching production or `.env`

## Setup

Requirements: Python 3, `ffmpeg` (`brew install ffmpeg`), a Simli API key, and a logged-in Claude Code.

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
echo "SIMLI_API_KEY=your_key_here" > .env
```

## Run

```bash
python3 -u simli_bridge.py     # start the call server
# then open the link it prints (http://localhost:8765/?token=...)
```

To talk to the worker in a plain terminal without the avatar: `python3 test_worker.py`

To run the safety-hook tests: `pip install pytest && python3 -m pytest test_risk.py`

The link's token is random each start. Set `ACCESS_TOKEN` in `.env` to keep it stable.

## Status

Working: video call with a custom avatar face, voice input, multiple projects, activity feed, live preview.

Not started: cloned voice (currently edge-tts) and outbound "employee calls you" notifications.

The call is reachable on `localhost` only. See [CLAUDE.md](CLAUDE.md) for architecture details and design decisions.
