"""Tests for restore points and the undo phrase. Run: python3 -m pytest test_undo.py"""

import os

import pytest

from avatar_worker_session import _looks_like_undo
from checkpoint import create_checkpoint, restore_checkpoint


@pytest.mark.parametrize("text", ["undo", "Undo that", "please undo it", "revert", "roll back", "go back.", "undo the last task"])
def test_undo_phrases(text):
    assert _looks_like_undo(text)


@pytest.mark.parametrize("text", ["undo the header color change", "can you go back to the homepage and fix it", "yes", "build a page"])
def test_non_undo_phrases(text):
    assert not _looks_like_undo(text)


def test_restore_reverts_edits_adds_and_deletes(tmp_path):
    d = str(tmp_path)
    (tmp_path / "a.txt").write_text("original")
    (tmp_path / "gone.txt").write_text("keep me")
    ref = create_checkpoint(d, "before task")
    assert ref

    (tmp_path / "a.txt").write_text("changed")
    (tmp_path / "new.txt").write_text("added by task")
    os.remove(tmp_path / "gone.txt")

    assert restore_checkpoint(d, ref)
    assert (tmp_path / "a.txt").read_text() == "original"
    assert (tmp_path / "gone.txt").read_text() == "keep me"
    assert not (tmp_path / "new.txt").exists()
