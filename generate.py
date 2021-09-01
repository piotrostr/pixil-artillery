import random 

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
            if k == 'vanilla':
                boxes[category] += [None for i in range(v)]
            else:
                boxes[category] += [k for i in range(v)]
    for name, box in boxes.items():
        assert len(box) == 5000 
        random.shuffle(boxes[name])
    return boxes


def main_loop():
    boxes = generate_boxes(rarity)
    _zip = zip(*boxes.values())
    idx = 1
    for [_weapon, _pendant, _background, _scope, _skin] in _zip:
        print(_weapon, _skin, _pendant, _scope, _background)
        path = 'weapons/'
        path += _weapon + '/'
        weapon, = glob(path + 'main/*.png')
        if _skin is not None:
            skins = glob(path + 'skins/*.png')
            skin, = [s for s in skins if _skin in s.lower()]
        else:
            skin = _skin
        if _pendant is not None:
            pendants = glob(path + 'pendants/*.png')
            pendant, = [s for s in pendants if _pendant in s.lower()]
        else:
            pendant = None
        if _scope is not None:
            scopes = glob(path + 'scopes/*.png')
            scope, = [s for s in scopes if _scope in s.lower()]
        elif _weapon == 'l96':
            if random.randint(0, 1):
                scope, = [s for s in scopes if _scope in s.lower()]
            else:
                scope = None
        else:
            scope = None
        backgrounds = glob('backgrounds/*.png')
        background, = [s for s in backgrounds if _background in s.lower()]
        atts = glob(path + 'attachments/*.png')
        att_combinations = []
        for i in range(1, len(atts)):
            att_combinations += list(combinations(atts, i))
        att_combinations = [list(i) for i in att_combinations]
        for i in range(1, len(atts)):
            att_combinations.append([])
        combination = random.randint(0, len(att_combinations))
        attachments = att_combinations[combination]
        with open('log.txt', 'w') as f:
            s = f'{idx}.png\t{_weapon:<15}{str(_skin):<5}'
            s += f'{str(_pendant):<10}{str(_scope):<10}'
            s += f'{_background:<10}'
            f.write(s)
        NFT(
            weapon=weapon,
            skin=skin,
            pendant=pendant,
            attachments=attachments,
            scope=scope,
            background=background
        )(idx)
        idx += 1


if __name__ == '__main__':
    main_loop()

