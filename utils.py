import cv2
import numpy as np
import matplotlib.pyplot as plt


def jpgize(img: np.ndarray):
    _img = img.copy()
    mask = _img[:, :, 3] == 0
    _img[mask] = [255, 255, 255, 255]
    _img = cv2.cvtColor(_img, cv2.COLOR_BGRA2BGR)
    return _img


def get_bottom_px(dat: np.ndarray):
    _dat = jpgize(dat)
    white_px = [255, 255, 255]
    start_idx = None
    for idx in range(len(_dat[-1])):
        if not all(i == j for i, j in zip(_dat[-1][idx], white_px)):
            return (idx, _dat.shape[0])


def create_filler(h: int, w: int):
    row = [[255, 255, 255, 0] for i in range(w)]
    return np.array([row for i in range(h)]).astype(np.uint8)


def show_px(weapon: np.ndarray, px: list[int, int]):
    _weapon = jpgize(weapon)
    _weapon[px[1], px[0]] = [255, 0, 0]
    fig, ax = plt.subplots(figsize=(20, 20))
    ax.imshow(_weapon)
    ax.grid(b=True)
    ax.xaxis.set_ticks(np.arange(0, _weapon.shape[1], 1))
    ax.yaxis.set_ticks(np.arange(0, _weapon.shape[0], 1))
    plt.show()

