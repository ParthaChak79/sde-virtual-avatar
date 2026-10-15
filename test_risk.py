"""Unit tests for the deterministic risk backstop. Run: python3 -m pytest test_risk.py"""

import pytest

from avatar_worker_session import classify_risk


@pytest.mark.parametrize(
    "command",
    [
        "rm file.txt",
        "rm -rf build",
        "rm -fr build",
        "rm --recursive --force dir",
        "unlink old.txt",
        "shred secrets.txt",
        "git push --force origin main",
        "git push -f",
        "git reset --hard HEAD~1",
        "git branch -D feature",
        "git clean -fd",
        "psql -c 'DROP TABLE users'",
        "mysql -e 'drop database shop'",
        "TRUNCATE TABLE orders",
        "DELETE FROM customers",
        "sudo shutdown now",
        "dd if=/dev/zero of=/dev/disk2",
        # known bypass attempts
        "find . -name '*.log' -delete",
        "find . -type f -exec rm {} +",
        "python3 -c \"import shutil; shutil.rmtree('data')\"",
        "python3 -c \"import os; os.remove('a.txt')\"",
        "git checkout -- .",
        "git restore .",
        "git stash drop",
        "git push origin +main",
        "git push --force-with-lease",
        "git reflog expire --expire=now --all",
        "mv important.txt /dev/null",
        "> config.txt",
        "truncate -s 0 data.db",
        "rsync -a --delete src/ dst/",
    ],
)
def test_risky_bash_is_flagged(command):
    risky, reason = classify_risk("Bash", {"command": command})
    assert risky, f"should have been flagged: {command}"
    assert reason


@pytest.mark.parametrize(
    "command",
    [
        "ls -la",
        "python3 -m http.server 5173",
        "git status",
        "git log --oneline",
        "git diff",
        "git push origin main",
        "git add . && git commit -m 'update'",
        "npm install",
        "cat README.md",
        "DELETE FROM users WHERE id = 3",
        "mkdir -p src/components",
    ],
)
def test_safe_bash_is_allowed(command):
    risky, _ = classify_risk("Bash", {"command": command})
    assert not risky, f"should not have been flagged: {command}"


@pytest.mark.parametrize(
    "tool, tool_input",
    [
        ("Write", {"file_path": "/proj/.env"}),
        ("Edit", {"file_path": "/proj/.env.local"}),
        ("Write", {"file_path": "/proj/prod/config.json"}),
        ("Edit", {"file_path": "/proj/production/app.py"}),
        ("Bash", {"command": "cat .env"}),
    ],
)
def test_sensitive_paths_are_flagged(tool, tool_input):
    risky, _ = classify_risk(tool, tool_input)
    assert risky


@pytest.mark.parametrize(
    "tool, tool_input",
    [
        ("Read", {"file_path": "/proj/.env"}),
        ("Grep", {"pattern": "production"}),
        ("Write", {"file_path": "/proj/src/environment.py"}),
        ("Write", {"file_path": "/proj/src/alive.py"}),
        ("Write", {"file_path": "/proj/src/index.html"}),
    ],
)
def test_harmless_calls_are_allowed(tool, tool_input):
    risky, _ = classify_risk(tool, tool_input)
    assert not risky


def test_empty_input_is_safe():
    assert classify_risk("Bash", {}) == (False, "")
    assert classify_risk("Write", None) == (False, "")
