import cv2

from nft import NFT
from glob import glob


_weapon = 'ak47'
path = 'weapons/'
path += _weapon + '/'
weapon, = glob(path + 'main/*.png')
skins = glob(path + 'skins/*.png')
pendants = glob(path + 'pendants/*.png')
scopes = glob(path + 'scopes/*.png')
NFT(
    weapon,
    attachments=[], 
    skin=None,
    pendant=None, 
    scope=None, 
    background='backgrounds/red.png',
    save=False,
    show=True
)('asdf')

