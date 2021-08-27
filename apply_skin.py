import numpy as np

def apply_skin(weapon: np.ndarray, skin: np.ndarray):
    assert weapon.shape == skin.shape
    assert skin.shape[-1] == 4
    _weapon = weapon.copy()
    h, w, c = skin.shape
    for row_idx in range(h):
        for px_idx in range(w):
            if skin[row_idx, px_idx][-1] != 0:
                # if not transparent
                _weapon[row_idx, px_idx] = skin[row_idx, px_idx]
    return _weapon

