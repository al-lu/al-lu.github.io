import os.path
from PIL import Image
import os
import time
from time import sleep


os.getcwd()
directory = 'portfolio/img/images/'

# iterate over files in
# that directory
i = 0
for filename in os.listdir(directory):

    f = os.path.join(directory, filename)
    # checking if it is a file
    if os.path.isfile(f):
        # print(f)

        print(f, i)
        image = Image.open('{filen}'.format(filen=f))
        time.sleep(0.5)
        # new_image = image.resize((136, 134))
        new_image = image.resize((50, 50))

        new_image.save(
            "{}".format(f), "PNG", optimize=True)

        # print(image.size)
        # print(new_image.size)

        i += 1

    else:
        break

print("Done")
