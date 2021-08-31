import numpy as np

from utils import jpgize


def crop_weapon(img: np.ndarray):
    _img = jpgize(img)
    h, w, c = _img.shape
    to_idx = int(h*0.8)
    from_idx = int(h*0.25)
    _img = _img[from_idx: to_idx]
    upper_idx, left_idx, lower_idx = get_crop_indices(_img)
    return img[from_idx + upper_idx: from_idx + lower_idx, left_idx:]


def crop_scope(img: np.ndarray):
    _img = jpgize(img)
    h, w, c = _img.shape
    to_idx = h
    from_idx = int(h*0.50)
    _img = _img[from_idx: to_idx]
    upper_idx, left_idx, lower_idx = get_crop_indices(_img)
    return img[from_idx + upper_idx: from_idx + lower_idx, left_idx:]


def crop_badge(img: np.ndarray):
    _img = jpgize(img)
    h, w, c = _img.shape
    lower_idx = 0
    right_idx = 0
    for row in range(h):
        if _img[row].mean() == 255.:
            lower_idx = row
            break
    for col in range(w):
        if _img.transpose(1, 0, 2)[col].mean() == 255.:
            right_idx = row
            break
    return img[: lower_idx, : right_idx]


def get_crop_indices(_img: np.ndarray):
    h, w, c = _img.shape
    upper_idx = 0
    for row in range(h):
        if _img[row].mean() != 255.:
            upper_idx = row
            break
    left_idx = 0
    for col in range(w):
        if _img.transpose(1, 0, 2)[col].mean() != 255.:
            left_idx = col
            break
    lower_idx = h
    for row in range(h)[::-1]:
         if _img[row - 1].mean() != 255.:
            lower_idx = row
            break
    return upper_idx, left_idx, lower_idx

