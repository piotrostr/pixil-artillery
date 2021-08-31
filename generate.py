from glob import glob
from nft import NFT
from itertools import combinations


def main_generative_loop(weapon_name):
    path = 'weapons/'
    path += weapon_name + '/'
    [weapon] = glob(path + 'main/*.png')
    skins = glob(path + 'skins/*.png')
    pendants = glob(path + 'pendants/*.png')
    atts = glob(path + 'attachments/*.png')
    att_combinations = []
    att_combinations += list(combinations(atts, 1))
    att_combinations += list(combinations(atts, 2))
    att_combinations += list(combinations(atts, 3))
    att_combinations += list(combinations(atts, 4))
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
    # todo include no pendant, no skin and so on
    # there is 28,404 possibilities so I guess sth is gonna be different
                   

if __name__ == '__main__':
    main_generative_loop('ak47')

