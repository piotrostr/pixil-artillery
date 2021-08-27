import cv2


def crop_weapon(img):
    _img = jpgize(img)
    h, w, c = _img.shape
    to_idx = int(h*0.8)
    from_idx = int(h*0.25)
    _img = _img[from_idx: to_idx]
    h, w, c = _img.shape
    upper_idx = 0
    for row in range(h):
        if _img[row].mean() != 255.:
            upper_idx = row
            break
    left_idx = 0
    for col in range(w):
        if _img.transpose(1, 0, 2)[col].mean() != 255.:
            left_idx = col
            break
    lower_idx = h
    for row in range(h)[::-1]:
         if _img[row - 1].mean() != 255.:
            lower_idx = row
            break
    return img[from_idx + upper_idx: from_idx + lower_idx, left_idx:]

