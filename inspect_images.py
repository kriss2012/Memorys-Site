import os
from PIL import Image

public_dir = "d:\\Memorys-Site\\public"
files = sorted(os.listdir(public_dir))

print(f"{'Filename':<40} | {'Width':<6} | {'Height':<6} | {'Aspect':<6} | {'EXIF Orientation'}")
print("-" * 80)

for f in files:
    if f.lower().endswith(('.jpg', '.jpeg', '.png')):
        path = os.path.join(public_dir, f)
        try:
            with Image.open(path) as img:
                w, h = img.size
                aspect = w / h
                exif = img.getexif()
                orientation = exif.get(274) if exif else None
                print(f"{f:<40} | {w:<6} | {h:<6} | {aspect:<6.2f} | {orientation}")
        except Exception as e:
            print(f"{f:<40} | Error: {e}")
