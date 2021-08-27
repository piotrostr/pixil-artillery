import numpy as np

from properties import properties
from jpgize import jpgize


def get_bottom_px(skin: np.ndarray):
    _skin = jpgize(skin)
    white_px = [255, 255, 255]
    start_idx = None
    for idx in range(len(_skin[-1])):
        if not all(i == j for i, j in zip(_skin[-1][idx], white_px)):
            return (idx, _skin.shape[0])


def create_filler(h: int, w: int):
    row = [[255, 255, 255, 0] for i in range(w)]
    return np.array([row for i in range(h)]).astype(np.uint8)


def resize(skin: np.ndarray, weapon: np.ndarray, weapon_name: str):
    sx, sy = get_bottom_px(skin)
    wx, wy = properties[weapon_name]['skin']
    wh, ww, wc = weapon.shape
    _skin = skin.copy()
    _weapon = weapon.copy()
    h, w, c = _skin.shape
    filler_left = create_filler(h, wx - sx)
    _skin = np.concatenate((filler_left, _skin), axis=1)
    h, w, c = _skin.shape
    filler_bottom = create_filler(wh - wy - 1, w)
    _skin = np.concatenate((_skin, filler_bottom), axis=0)
    h, w, c = _skin.shape
    filler_right = create_filler(h, ww - w)
    _skin = np.concatenate((_skin, filler_right), axis=1)
    h, w, c = _skin.shape
    if wh > h:
        filler_top = create_filler(wh - h, w)
        _skin = np.concatenate((filler_top, _skin), axis=0)
    else:
        filler_top = create_filler(h - wh, w)
        _weapon = np.concatenate((filler_top, _weapon), axis=0)
    # todo cover the case when the skin is over the actual weapon
    assert _skin.shape == _weapon.shape
    return _skin, _weapon

