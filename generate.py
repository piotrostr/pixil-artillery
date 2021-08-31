import cv2
import numpy as np
import matplotlib.pyplot as plt
import os


def list_files():
    for weapon in os.listdir('weapons'):
        print(weapon.upper())
        for subdir in os.listdir('weapons/' + weapon):
            if subdir == '.DS_Store':
                os.remove('weapons/' + weapon + '/' + '.DS_Store')
                continue
            ldir = os.listdir('weapons/' + weapon + '/' + subdir)
            if '.DS_Store' in ldir:
                os.remove('weapons/' + weapon + '/' + subdir + '/' + '.DS_Store')
                ldir = os.listdir('weapons/' + weapon + '/' + subdir)
            print(f"{subdir:<10} {len(ldir)}")
        print('-'*8)


class Piece:
    def __init__(
            self, 
            weapon_name: str,
            attachments: list[int],  # from  
            scope: int,              # from 1 to 4
            skin: int,               # from 1 to 9
            background: int          # from 1 to 4
        ):
        self.weapon = weapon
        self.nft = self.create_filler(100, 100)
        self.attachments = attachments
        self.skin = skin
    
    def apply(self, dat: np.ndarray):
        assert self.weapon.shape == dat.shape
        assert dat.shape[-1] == 4
        h, w, c = dat.shape
        for row_idx in range(h):
            for px_idx in range(w):
                if dat[row_idx, px_idx][-1] != 0:
                    self.weapon[row_idx, px_idx] = dat[row_idx, px_idx]


    @staticmethod
    def create_filler(h: int, w: int):
        row = [[255, 255, 255, 0] for i in range(w)]
        return np.array([row for i in range(h)]).astype(np.uint8)

    def __call__(self):
        plt.imshow(self.weapon)
        plt.show()
    

if __name__ == '__main__':
    list_files()

