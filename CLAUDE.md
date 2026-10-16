# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A virtual coding employee for a non-developer business owner. The "employee"
is a real Claude Code session (via the Claude Agent SDK) that reads files,
writes code, and runs commands in a real project. The "video call" is a
hosted digital-human avatar (Simli) that gives it a face, a voice, and a
browser page the owner can join on demand — the same way they'd manage a
remote engineer: give a task, get a plan, approve it, check back later.

Two things are deliberately decoupled and must stay that way:
1. **The worker** (`avatar_worker_session.py`) — one persistent
   `ClaudeSDKClient` session per project, runs continuously, independent of
   any call.
2. **The call** (Simli, via `simli_bridge.py`) — dialed into on demand and
   attached to the running worker. Closing the browser tab doesn't stop the
   work.

## Current status

Phase 0 (terminal-only worker) and Phase 2-equivalent (worker driving a real
video call) are both working, via Simli rather than the original
LiveTalking/RunPod plan (see "Why Simli instead of LiveTalking/RunPod"
below). The avatar uses a real custom face generated from the owner's own
photo. Since then the call page has grown past a single fixed project: it
now opens on a project picker (attach to the project already running or
create a new one under `AI_PROJECTS_DIR` (set in `.env`)), the owner can talk
instead of type (browser speech-to-text), and the page shows a live
plain-English activity feed plus an embedded preview of anything she stands
up a local server for. Remaining Phase 3 items: a cloned voice (currently
edge-tts, not a cloned voice) and outbound "employee calls you"
notifications — not started, and the latter needs a real design decision
since a browser tab can't be rung if it isn't open.

## Architecture

```
Your Mac (this repo)
┌────────────────────────────────────────────────────────────────┐
│ avatar_worker_session.py                                        │
│  SessionManager: one persistent WorkerSession/ClaudeSDKClient   │
│  per project (keyed by project_id), plan→acceptEdits,           │
│  PreToolUse risk hook, on_speak + on_activity callbacks         │
│                                                                   │
│ simli_bridge.py (local web server, localhost:8765)               │
│  GET  /            -> serves simli_call.html                     │
│  GET  /session     -> mints a short-lived Simli session_token +  │
│                       ICE servers server-side (real API key       │
│                       never reaches the browser)                 │
│  GET  /projects    -> lists this project + everything under       │
│                       AI_PROJECTS_DIR                             │
│  POST /projects    -> creates a new project folder there          │
│  GET  /ws?project= -> browser's text in, WorkerSession replies    │
│                       out as {type:"text"}, {type:"activity"}      │
│                       + PCM16 audio bytes                         │
│  edge-tts (mp3) -> ffmpeg -> PCM16/16kHz mono, per utterance      │
└────────────────────────────────────────────────────────────────┘
              │ browser opens http://localhost:8765/
              ▼
simli_call.html (served locally, runs entirely in the browser)
  - Project picker screen first: pick an existing project or type
    a name to create one, then Join Call (click required so the
    browser allows audio/video autoplay -- connecting automatically
    on page load gets silently blocked)
  - Simli JS SDK (bundled locally, see below) opens the actual
    WebRTC session directly to Simli's cloud using the session_token
  - forwards PCM16 audio bytes it gets from /ws into that same
    WebRTC session via simliClient.sendAudioData()
  - mic button uses the browser's built-in speech recognition to
    turn talking into the same {type:"user_text"} messages typing
    already sent
  - left panel: avatar video/audio, transcript, type/talk controls;
    right panel: a live activity feed ({type:"activity"} messages)
    and an iframe preview that lights up when she states a
    reachable http://localhost address
```

Why it's shaped this way:
- Simli has no access to the owner's project files or Claude Code login, so
  it **cannot** run the worker itself. The worker must run on the Mac, next
  to the real project. `simli_bridge.py` must be running locally whenever
  the call is in use.
- Whoever opens the WebRTC connection to Simli **both sends audio and
  receives video on that same connection** — there is no way to have Python
  push audio into a session while a separate browser client just watches.
  This is why the browser (not `simli_bridge.py`) does the actual Simli
  connection, and why the Mac-side server's job is just relaying text/audio
  between the worker and that browser page over a local WebSocket.
- The Simli API key stays server-side (`simli_bridge.py`); the browser only
  ever receives a short-lived `session_token` minted via `/session`.
- Scope decision: the call is reachable on `localhost`/the local network
  only, not from anywhere on the internet. Revisit if remote access is
  needed later (would need `simli_bridge.py` reachable from outside, e.g.
  via a tunnel).

### Why Simli instead of LiveTalking/RunPod

The original plan (see git history / `livetalking_bridge.py`,
`worker_bridge.py`-era code) self-hosted LiveTalking on a rented RunPod GPU
pod, bridged to the worker over a WebSocket. That was fully built and
working, but got abandoned for two reasons: (1) stopping a RunPod pod to
save money is not reliable — resuming can fail with "not enough free GPUs,"
and the only way to guarantee availability is to leave it running
continuously (~$500/mo for an RTX 4090, versus Simli's pay-per-minute-of-
actual-use pricing); (2) a large fraction of that build was networking
plumbing unrelated to the actual product (WebRTC/TURN relay setup, Cloudflare
bot-detection workarounds, network-mounted-disk install hangs) that a hosted
avatar API eliminates entirely. `livetalking_bridge.py` is kept in the repo
as historical reference, not part of the running system — the RunPod pod
itself has been terminated.

### Multiple projects

`SessionManager` (`avatar_worker_session.py`) was already keyed by
`project_id`, so nothing there needed to change to support more than one
project — `simli_bridge.py` just needed a way to let the browser pick one.
The call page now opens on a picker (`GET /projects`) instead of going
straight to Join Call:
- Every project the browser can attach to is either this repo (fixed
  `PROJECT_ID`/`CWD`) or a folder under `AI_PROJECTS_DIR`
  (`AI_PROJECTS_DIR` (set in `.env`)); `POST /projects` creates a new one there.
- `handle_ws` never trusts a folder path sent by the browser directly — it
  looks the `project_id` up in the server-side `KNOWN_PROJECTS` dict
  (populated by `/projects`), so a stray request can't point a worker at an
  arbitrary path on disk.
- One `asyncio.Lock` per project (`session_locks`, not the old single global
  lock) — otherwise a slow reply in one project's call would stall an
  unrelated project's call that happened to be running at the same time.

### Live activity feed and website preview

Two more channels ride the same `/ws` connection alongside speech:
- **Activity feed**: `WorkerSession` also takes an `on_activity` callback,
  fired from the `PostToolUse` hook with the same plain-English summary used
  for `status_report()`. `simli_bridge.py` forwards each one to the browser
  as `{type:"activity"}`; the right-hand panel lists them live.
- **Live preview**: the appended system prompt tells the worker to actually
  start a local server (e.g. `python3 -m http.server <port>`) before stating
  an address out loud, and to never state one that isn't genuinely
  reachable. The browser regex-matches spoken text for a
  `localhost`/`127.0.0.1` URL and, before switching the embedded iframe over
  to it, polls it with `fetch(url, {mode:"no-cors"})` for up to ~10 seconds —
  there's a real race between her finishing the sentence and the server
  actually accepting connections, and a bare `iframe.src` assignment doesn't
  get a second chance if it loses that race.

## Commands

```bash
cd "/Users/partha/Downloads/SDE Virtual Avatar"
source .venv/bin/activate
pip install -r requirements.txt      # claude-agent-sdk, aiohttp, edge_tts, websockets, python-dotenv

python3 test_worker.py               # talk to the worker in a plain terminal, no avatar
python3 -u simli_bridge.py           # start the call server, then open the link it prints (includes ?token=...)
python3 -m pytest                    # risk-hook, restore-point and undo tests
```

`ffmpeg` must be on PATH (`brew install ffmpeg`) — used to convert edge-tts's
mp3 output to the PCM16/16kHz/mono format Simli requires.

All per-user settings (`SIMLI_API_KEY`, `SIMLI_FACE_ID`, `ANTHROPIC_API_KEY`,
`PROJECT_DIR`, `AI_PROJECTS_DIR`) live in `.env` (git-ignored; template in
`.env.example`) and are read in `config.py`. Every user supplies their own
keys -- nothing is hardcoded. The server exits if the Simli ones are missing;
a missing `ANTHROPIC_API_KEY` only prints a note and falls back to the local
Claude Code login. Access to the page needs the `?token=` link printed at
startup (`ACCESS_TOKEN` in `.env` makes it stable).

### Rebuilding `simli_client_bundle.js`

Simli's JS SDK (`simli-client` on npm) has no CDN/build-free option — its
`livekit-client` dependency breaks jsDelivr's and esm.sh's auto-bundlers.
It's pre-bundled locally instead. To rebuild after a version bump:

```bash
cd "/Users/partha/Downloads/SDE Virtual Avatar/.build"
npm install simli-client
npx esbuild entry.js --bundle --format=esm --platform=browser --outfile=../simli_client_bundle.js
```

(`entry.js` in `.build/` just re-exports `{ SimliClient, LogLevel }` from
`simli-client`.) `simli_bridge.py` serves the resulting file at
`/simli_client_bundle.js`; `simli_call.html` imports it from there.

### Avatar / Simli account maintenance

- Faces are created via `POST https://api.simli.ai/faces/legacy` (multipart,
  field `image`, header `x-simli-api-key`) — the newer Trinity model
  (`/faces/trinity`) needs a paid tier; legacy works on the free tier and
  only needs a single photo (no video/looping required, unlike the old
  LiveTalking pipeline). Poll `GET .../generation_status?face_id=...`.
- The face id is `SIMLI_FACE_ID` in `.env`, read through `config.py` (all per-user settings live there).
- Never put a real key back in source; keys come from `.env` via `config.py`.

## Design decisions that must not be casually changed

- **Plain English only** in anything the worker says: no API/backend/
  repository/deploy/dependency/schema/database/endpoint/framework/commit/
  branch/build/config jargon. The business owner is not a developer.
- **New tasks start in `plan` mode**, describe the plan + a rough time
  estimate, wait for a clear go-ahead, then switch to `acceptEdits`
  (`WorkerSession.send()` auto-reverts to `plan` after each task completes).
- **The risk backstop is a deterministic `PreToolUse` hook**
  (`classify_risk()` in `avatar_worker_session.py`), not a prompt
  instruction — it fires regardless of permission mode, because PreToolUse
  hooks run before permission-mode checks. Extend the pattern list as gaps
  are found; it currently covers `rm`/deletions, force-push, hard reset,
  branch force-delete, `DROP`/`TRUNCATE`/unscoped `DELETE`, and paths
  hinting at `prod`/`production`/`.env`/`live`.
- `SESSIONS.resolve_pending_confirmation()` exists specifically so a
  confirmation answer can arrive from somewhere other than the same
  synchronous call that asked the question (e.g. the next message over the
  bridge). In `simli_bridge.py`'s WS handler this means a confirmation reply
  must be resolved *without* waiting on `session_lock` — the in-flight
  `session.send()` that's blocked on that exact confirmation is the lock
  holder, so waiting for the lock there would deadlock.
- **Project lookups go through `KNOWN_PROJECTS`, never a client-supplied
  path** (see Multiple projects above) — this is the only thing standing
  between "browser picks a project by name" and "browser tells the worker
  which folder on disk to touch."
- **Live preview addresses must come from a running server, not a guess** —
  the appended prompt rule and the browser's retry-before-switching logic
  exist together for this reason; weakening either one reintroduces
  "localhost refused to connect."

## Known gotchas learned the hard way

- Browsers block audio/video `autoplay` until there's been a real user
  gesture (click) on the page. `simli_call.html` only starts the Simli
  connection after a "Join Call" button click for this reason — connecting
  automatically on page load left video/audio silently non-functional even
  though the WebRTC connection itself was fine.
- Simli's free tier has a **concurrent session limit**, not just a
  requests-per-time-window one. Repeated test connections without cleanly
  closing each one first ("RATE LIMIT REACHED! MAKE SURE YOU CLOSE ALL
  CONNECTIONS BEFORE STARTING NEW ONES") can lock things up for as long as
  each dangling session's idle timeout (default 300s from
  `/compose/token`'s `maxIdleTime`) — not something a quick retry fixes.
  Stop testing entirely and wait it out rather than retrying rapidly.
- `SimliClient.start()` has its own internal 15s-timeout-then-retry loop
  (up to 10 attempts, switching from p2p to livekit transport after 2
  failures) — a single slow/failed attempt is normal and self-heals; only
  worry if it exhausts all retries.
- Errors thrown inside `SimliClient` are sometimes plain strings, not
  `Error` objects — code that assumes `err.message` exists will silently
  show `"undefined"` instead of the real reason.
- The Web Speech API's default `continuous = false` ends the recognizer the
  moment it detects a pause (a breath, a thought), which cut off longer
  spoken instructions mid-sentence. `simli_call.html`'s mic button uses
  `continuous = true` instead and only finalizes/sends the transcript when
  the mic button is clicked again.
- A freshly spoken `http://localhost:PORT` isn't necessarily reachable yet
  even when the worker did start a real server — there's a startup race, so
  the preview iframe's `src` is only set after a short
  `fetch(url, {mode:"no-cors"})` retry loop confirms something's listening.
