import cv2
import numpy as np
import matplotlib.pyplot as plt

from properties import properties
from utils import create_filler, get_bottom_px


class Generate:
    def __init__(
        self,
        weapon_name: str, 
        attachments: list[str],
        skin: np.ndarray,
    ):
        self.properties = properties[weapon_name]
        print(self.properties)
        self.weapon = cv2.imread(f'./weapons/{weapon_name}.png',
                                 cv2.IMREAD_UNCHANGED)
        self.attachments = [cv2.imread(f'./attachments/{i}.png',
                                       cv2.IMREAD_UNCHANGED)
                            for i in attachments]
        self.skin = skin
    
    def resize(self, dat: np.ndarray, dat_name: str) -> np.ndarray:
        dx, dy = get_bottom_px(dat)
        wx, wy = self.properties[dat_name]
        wh, ww, wc = self.weapon.shape
        _dat = dat.copy()
        h, w, c = _dat.shape
        filler_left = create_filler(h, wx - dx)
        _dat = np.concatenate((filler_left, _dat), axis=1)
        h, w, c = _dat.shape
        filler_bottom = create_filler(wh - wy - 1, w)
        _dat = np.concatenate((_dat, filler_bottom), axis=0)
        h, w, c = _dat.shape
        filler_right = create_filler(h, ww - w)
        _dat = np.concatenate((_dat, filler_right), axis=1)
        h, w, c = _dat.shape
        if wh > h:
            filler_top = create_filler(wh - h, w)
            _dat = np.concatenate((filler_top, _dat), axis=0)
        else:
            filler_top = create_filler(h - wh, w)
            self.weapon = np.concatenate((filler_top, self.weapon), axis=0)
        assert _dat.shape == self.weapon.shape
        return _dat
    
    def widen_weapon_and_update_properties(self):
        """
        adds a space for the attachments, translates the points 
        by the amount of filler added.
        """
        fill_size = 60
        h, w, c = self.weapon.shape
        filler = create_filler(fill_size, w)
        self.weapon = np.concatenate((filler, self.weapon), axis=0)
        for k, [x, y] in self.properties.items():
            self.properties[k] = [x, y + fill_size]
            
        h, w, c = self.weapon.shape
        filler = create_filler(h, fill_size)
        self.weapon = np.concatenate((self.weapon, filler), axis=1)
        
        h, w, c = self.weapon.shape
        filler = create_filler(fill_size, w)
        self.weapon = np.concatenate((self.weapon, filler), axis=0)

        h, w, c = self.weapon.shape
        filler = create_filler(h, fill_size)
        self.weapon = np.concatenate((filler, self.weapon), axis=1)
        for k, [x, y] in self.properties.items():
            self.properties[k] = [x + fill_size, y]
            
    def apply(self, dat: np.ndarray):
        assert self.weapon.shape == dat.shape
        assert dat.shape[-1] == 4
        h, w, c = dat.shape
        for row_idx in range(h):
            for px_idx in range(w):
                if dat[row_idx, px_idx][-1] != 0:
                    self.weapon[row_idx, px_idx] = dat[row_idx, px_idx]

    def __call__(self):
        # widen the weapon
        self.widen_weapon_and_update_properties()
        skin = self.resize(self.skin, 'skin')
        self.apply(skin)

        # apply the skin
        # add the attachments
        # add the caption and scope bits
        # add background
        plt.imshow(self.weapon)
        plt.show()
    

if __name__ == '__main__':
    weapon_name = 'ak47'
    attachments = ['suppressor', 'holo', 'piniata']
    skin = cv2.imread('./skins/ak47/1.png')
    Generate(weapon_name, attachments, skin)()

