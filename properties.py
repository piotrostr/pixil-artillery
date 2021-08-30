import numpy as np
import matplotlib.pyplot as plt

from jpgize import jpgize


# (x, y) - the most bottom points
properties = {
    'ak47': {
        'skin': [22, 15],
        'pendants': [33, 15],
        'acog': [16, 8],
        'green_laser': [37, 20],
        'red_laser': [36, 11], 
        'holo': [17, 7],
        'red_dot': [18, 7],
        'suppressor': [53, 14],
        'g_launcher': [37, 20],
        'flamethrower': [29, 20],
        'thermal': [17, 7]
    }
}


def show_px(weapon: np.ndarray, px: list[int, int]):
    _weapon = jpgize(weapon)
    _weapon[px[1], px[0]] = [255, 0, 0]
    fig, ax = plt.subplots(figsize=(20, 20))
    ax.imshow(_weapon)
    ax.grid(b=True)
    ax.xaxis.set_ticks(np.arange(0, _weapon.shape[1], 1))
    ax.yaxis.set_ticks(np.arange(0, _weapon.shape[0], 1))
    plt.show()
    