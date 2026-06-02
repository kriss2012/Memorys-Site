import os
from PIL import Image

public_dir = "d:\\Memorys-Site\\public"
files = sorted(os.listdir(public_dir))

for f in files[:5]: # just check first 5
    if f.lower().endswith(('.jpg', '.jpeg', '.png')):
        path = os.path.join(public_dir, f)
        try:
            with Image.open(path) as img:
                print(f"File: {f}")
                print(f"  info keys: {list(img.info.keys())}")
                if 'exif' in img.info:
                    print("  Has raw exif")
                exif = img.getexif()
                if exif:
                    print(f"  getexif keys: {list(exif.keys())}")
                else:
                    print("  No getexif")
        except Exception as e:
            print(f"  Error: {e}")
