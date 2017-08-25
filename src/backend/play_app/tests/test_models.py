# File: ./backend/play_app/tests/test_models.py

import pytest
from mixer.backend.django import mixer

pytestmark = pytest.mark.django_db

def test_message():
	obj = mixer.blend('play_app.Message')
	assert obj.pk > 0

