import numpy as np

from glob import glob
from nft import NFT
from itertools import combinations
from rarity import rarity


def generate_boxes(rarity):
    boxes = dict(
        weapons = [],
        keychains = [],
        backgrounds = [],
        scopes = [],
        skins = []
    )
    for category, values in rarity.items():
        for k, v in values.items():
            boxes[category] += [k for i in range(v)]
    for name, box in boxes.items():
        assert len(box) == 5000 
    return boxes


def main_generative_loop(weapon_name):
    path = 'weapons/'
    path += weapon_name + '/'
    [weapon] = glob(path + 'main/*.png')
    skins = glob(path + 'skins/*.png')
    pendants = glob(path + 'pendants/*.png')
    atts = glob(path + 'attachments/*.png')
    att_combinations = []
    for i in range(1, len(atts)):
        att_combinations += list(combinations(atts, i))
    for i in range(1, len(atts)):
        att_combinations.append('vanilla')
    att_combinations = [list(i) for i in att_combinations]

    scopes = glob(path + 'scopes/*.png')
    backgrounds = glob('backgrounds/*.png')
    i = 0
    for skin in skins:
        i += 1
        for pendant in pendants:
            i += 1
            for attachments in att_combinations:
                i += 1
                for background in backgrounds:
                    i += 1
                    for scope in scopes:
                        i += 1
                        NFT(
                            weapon=weapon,
                            skin=skin,
                            pendant=pendant,
                            attachments=attachments,
                            scope=scope,
                            background=background,
                        )(weapon_name, i)


if __name__ == '__main__':
    generate_boxes(rarity)


# l96 has iron sight and also a base sight

# half iron sight, half regular scope 

# tar make the weapon 


# 27 

# 677.341  
# 488

