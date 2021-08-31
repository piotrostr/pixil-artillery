import os
from nft import NFT


if __name__ == '__main__':
    NFT(
        weapon='weapons/ak47/main/ak47.png',
        skin='weapons/ak47/skins/1.png',
        pendant='weapons/ak47/pendants/disco.png',
        attachments=[
            'weapons/ak47/attachments/flamethrower.png'
        ],
        scope='weapons/ak47/scopes/holo.png',
        background='backgrounds/1.png'
    )(1)

