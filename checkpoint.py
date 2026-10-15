"""Restore points taken before the worker starts an approved task.

Uses git plumbing with a throwaway index so it never touches the project's
working files, staging area, current branch, or history. Each snapshot is a
commit object (tracked + untracked, respecting .gitignore) kept under
refs/avatar-checkpoints/, so it can't be lost to garbage collection and
doesn't show up in normal branch history.
"""

from __future__ import annotations

import os
import subprocess
import tempfile
from datetime import datetime

REF_PREFIX = "refs/avatar-checkpoints"


def _git(cwd: str, *args: str, env: dict[str, str] | None = None, check: bool = True) -> str:
    result = subprocess.run(
        ["git", *args],
        cwd=cwd,
        env={**os.environ, **(env or {})},
        capture_output=True,
        text=True,
        check=check,
    )
    return result.stdout.strip()


def _ensure_repo(cwd: str) -> None:
    inside = subprocess.run(
        ["git", "rev-parse", "--is-inside-work-tree"], cwd=cwd, capture_output=True, text=True
    )
    if inside.returncode != 0:
        _git(cwd, "init")


def create_checkpoint(cwd: str, label: str = "") -> str | None:
    """Snapshot the project folder. Returns the checkpoint ref name, or None on failure."""
    try:
        _ensure_repo(cwd)
        with tempfile.TemporaryDirectory() as tmp:
            env = {
                "GIT_INDEX_FILE": os.path.join(tmp, "index"),
                "GIT_AUTHOR_NAME": "Avatar Worker",
                "GIT_AUTHOR_EMAIL": "avatar@localhost",
                "GIT_COMMITTER_NAME": "Avatar Worker",
                "GIT_COMMITTER_EMAIL": "avatar@localhost",
            }
            head = subprocess.run(
                ["git", "rev-parse", "--verify", "-q", "HEAD"], cwd=cwd, capture_output=True, text=True
            )
            if head.returncode == 0:
                _git(cwd, "read-tree", "HEAD", env=env)
            _git(cwd, "add", "-A", env=env)
            tree = _git(cwd, "write-tree", env=env)

            message = f"Restore point {datetime.now():%Y-%m-%d %H:%M:%S}" + (f": {label}" if label else "")
            commit_args = ["commit-tree", tree, "-m", message]
            if head.returncode == 0:
                commit_args += ["-p", head.stdout.strip()]
            commit = _git(cwd, *commit_args, env=env)

        ref = f"{REF_PREFIX}/{datetime.now():%Y%m%d-%H%M%S}-{commit[:7]}"
        _git(cwd, "update-ref", ref, commit)
        return ref
    except (subprocess.CalledProcessError, OSError):
        return None


def list_checkpoints(cwd: str) -> list[str]:
    try:
        out = _git(cwd, "for-each-ref", "--format=%(refname) %(subject)", REF_PREFIX)
    except (subprocess.CalledProcessError, OSError):
        return []
    return out.splitlines()
