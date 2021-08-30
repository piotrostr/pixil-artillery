from properties import properties

def widen_weapon_and_update_properties(weapon: np.ndarray,
                                       weapon_name: str, 
                                       attachment_name: str):
    """
    First add a plenty space for the attachments and 
    then re-crop the weapon.
    Translate the points by the amount of filler added.
    """
    attachment = cv2.imread('./attachments/' + attachment_name + '.png', 
                            cv2.IMREAD_UNCHANGED)
    _weapon = weapon.copy()
    _attachment = attachment.copy()
    _properties = properties[weapon_name].copy()
    fill_size = 60
    
    h, w, c = _weapon.shape
    filler = create_filler(fill_size, w)
    _weapon = np.concatenate((filler, _weapon), axis=0)
    for k, [x, y] in _properties.items():
        _properties[k] = [x, y + fill_size]
        
    h, w, c = _weapon.shape
    filler = create_filler(h, fill_size)
    _weapon = np.concatenate((_weapon, filler), axis=1)
    
    h, w, c = _weapon.shape
    filler = create_filler(fill_size, w)
    _weapon = np.concatenate((_weapon, filler), axis=0)

    h, w, c = _weapon.shape
    filler = create_filler(h, fill_size)
    _weapon = np.concatenate((filler, _weapon), axis=1)
    for k, [x, y] in _properties.items():
        _properties[k] = [x + fill_size, y]

    # then use the transformed points to resize the attachments, 
    # and run the applying algo
    
    return _properties, _weapon
    