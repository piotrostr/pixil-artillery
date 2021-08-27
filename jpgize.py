import cv2

def jpgize(img):
    _img = img.copy()
    mask = _img[:, :, 3] == 0
    _img[mask] = [255, 255, 255, 255]
    _img = cv2.cvtColor(_img, cv2.COLOR_BGRA2BGR)
    return _img
