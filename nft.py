import cv2
import numpy as np


class NFT:
    def __init__(
            self, 
            weapon: str,
            skin: str,              
            pendant: str,
            scope: str,              
            background: str,        
            attachments: list[str] = list
        ):
        """
        :params weapon, skin, pendant, attachments, scope, background:
            paths to the given components of each nft
        """
        if not background or not weapon: 
            raise Exception('background and weapon are required')
        self.nft = cv2.imread(weapon, -1) 
        self.attachments = [cv2.imread(att, -1) 
                           for att in attachments]
        self.skin = cv2.imread(skin, -1) if skin else None
        self.scope = cv2.imread(scope, -1) if scope else None
        self.background = cv2.imread(background, -1)
        self.pendant = cv2.imread(pendant, -1) if pendant else None
    
    def apply(self, dat: np.ndarray):
        h, w, c = self.nft.shape
        for row_idx in range(100):
            for px_idx in range(100):
                if dat[row_idx, px_idx][-1] != 0:
                    self.nft[row_idx, px_idx] = dat[row_idx, px_idx]

    def fill(self):
        for row_idx in range(100):
            for px_idx in range(100):
                if self.nft[row_idx, px_idx][-1] == 0:
                    self.nft[row_idx, px_idx] = self.background[row_idx, px_idx]

    def __call__(self, idx):
        if self.skin is not None:
            self.apply(self.skin)
        if self.pendant is not None:
            self.apply(self.pendant)
        if self.scope is not None:
            self.apply(self.scope)
        if len(self.attachments):
            for attachment in self.attachments:
                self.apply(attachment)
        self.fill()
        if False:
            cv2.imwrite(f'{weapon_name}/{idx}.png', self.nft)
        plt.imshow(cv2.cvtColor(self.nft, cv2.COLOR_BGRA2RGBA))
        plt.show()

