import os


def list_files():
    for weapon in os.listdir('weapons'):
        if weapon == '.DS_Store':
            os.remove('weapons/.DS_Store')
            continue
        print('\n' + weapon.upper())
        for subdir in os.listdir('weapons/' + weapon):
            if subdir == '.DS_Store':
                os.remove('weapons/' + weapon + '/' + '.DS_Store')
                continue
            ldir = os.listdir('weapons/' + weapon + '/' + subdir)
            if '.DS_Store' in ldir:
                os.remove('weapons/' + weapon + '/' + subdir + '/' + '.DS_Store')
                ldir = os.listdir('weapons/' + weapon + '/' + subdir)
            print(f"{subdir:<10} {len(ldir):<4}", end='  ')

