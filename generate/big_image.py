import cv2
import hashlib
import numpy as np
import glob

images = [cv2.imread(i, -1) for i in glob.glob('../art/*.png')]
img = np.concatenate(images[:71], axis=1)
images = images[71:]
while len(images) > 71:
    new_row = np.concatenate(images[:71], axis=1)
    row_height, *_ = new_row.shape
    img = np.concatenate((img, new_row), axis=0)
    images = images[71:]
filler = np.zeros((row_height, (71 - len(images))*100, 4))
last_row = np.concatenate(images, axis=1)
last_row = np.concatenate((last_row, filler), axis=1)
img = np.concatenate((img, last_row), axis=0)
print(img.shape)
cv2.imwrite('big_image.png', img)
img = cv2.imread('big_image.png', -1)
img_hash = hashlib.sha256(img).hexdigest()
print(f'img hash: {img_hash}')

assert img_hash == '1907d8646d98ab4cde4a20c33d54964c95f3cedf565e7c69bc6c238d48e5d6d5'
