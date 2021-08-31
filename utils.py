import cv2
import numpy as np


def jpgize(img: np.ndarray):
    _img = img.copy()
    mask = _img[:, :, 3] == 0
    _img[mask] = [255, 255, 255, 255]
    _img = cv2.cvtColor(_img, cv2.COLOR_BGRA2BGR)
    return _img

def create_filler(h: int, w: int):
    row = [[255, 255, 255, 0] for i in range(w)]
    return np.array([row for i in range(h)]).astype(np.uint8)


