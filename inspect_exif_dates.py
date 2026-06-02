import os
from PIL import Image
from PIL.ExifTags import TAGS

public_dir = "d:\\Memorys-Site\\public"
files = sorted(os.listdir(public_dir))

print(f"{'Filename':<40} | {'EXIF Date':<20} | {'File Modification Date':<20}")
print("-" * 90)

for f in files:
    if f.lower().endswith(('.jpg', '.jpeg', '.png')):
        path = os.path.join(public_dir, f)
        try:
            with Image.open(path) as img:
                exif = img._getexif()
                exif_date = None
                if exif:
                    for tag_id, value in exif.items():
                        tag_name = TAGS.get(tag_id, tag_id)
                        if tag_name in ('DateTimeOriginal', 'DateTimeDigitized', 'DateTime'):
                            exif_date = value
                            break
                
                mtime = os.path.getmtime(path)
                import datetime
                mtime_str = datetime.datetime.fromtimestamp(mtime).strftime('%Y-%m-%d %H:%M:%S')
                print(f"{f:<40} | {str(exif_date):<20} | {mtime_str:<20}")
        except Exception as e:
            print(f"{f:<40} | Error: {e}")
