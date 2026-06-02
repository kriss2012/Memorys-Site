import os
import shutil
import subprocess
from PIL import Image

public_dir = "d:\\Memorys-Site\\public"
backup_dir = "d:\\Memorys-Site\\public_backup"

if not os.path.exists(backup_dir):
    os.makedirs(backup_dir)
    print(f"Created backup directory: {backup_dir}")

# List of photos to rotate (90 degrees clockwise)
photos_to_rotate = [
    "photo_2026-06-01_10-16-34.jpg",
    "photo_2026-06-01_10-16-37.jpg",
    "photo_2026-06-01_10-16-51.jpg",
    "photo_2026-06-01_10-16-53.jpg",
    "photo_2026-06-01_10-16-36.jpg",
    "photo_2026-06-01_10-16-46.jpg"
]

print("Rotating photos...")
for photo in photos_to_rotate:
    src_path = os.path.join(public_dir, photo)
    backup_path = os.path.join(backup_dir, photo)
    
    if os.path.exists(src_path):
        # Back up first
        if not os.path.exists(backup_path):
            shutil.copy2(src_path, backup_path)
            print(f"Backed up {photo}")
        
        # Rotate
        try:
            with Image.open(src_path) as img:
                # Transpose ROTATE_270 is 90 degrees clockwise rotation
                rotated_img = img.transpose(Image.ROTATE_270)
                rotated_img.save(src_path, quality=95)
                print(f"Successfully rotated {photo} 90 degrees clockwise.")
        except Exception as e:
            print(f"Error rotating {photo}: {e}")
    else:
        print(f"File not found: {photo}")

# List of videos to rotate (90 degrees clockwise)
videos_to_rotate = [
    "video_2026-06-01_10-16-34.mp4",
    "video_2026-06-01_10-16-24.mp4",
    "video_2026-06-01_10-16-43.mp4",
    "video_2026-06-01_10-16-54.mp4"
]

print("\nRotating videos using ffmpeg...")
for video in videos_to_rotate:
    src_path = os.path.join(public_dir, video)
    backup_path = os.path.join(backup_dir, video)
    temp_path = os.path.join(public_dir, "temp_" + video)
    
    if os.path.exists(src_path):
        # Back up first
        if not os.path.exists(backup_path):
            shutil.copy2(src_path, backup_path)
            print(f"Backed up {video}")
        
        # Rotate using ffmpeg
        # transpose=1: 90 degrees clockwise
        try:
            cmd = [
                "ffmpeg", "-y", "-i", src_path, 
                "-vf", "transpose=1", 
                "-c:a", "copy", temp_path
            ]
            print(f"Running command: {' '.join(cmd)}")
            result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            if result.returncode == 0:
                os.replace(temp_path, src_path)
                print(f"Successfully rotated {video} 90 degrees clockwise.")
            else:
                print(f"Failed to rotate {video}. Error: {result.stderr.decode('utf-8', errors='ignore')}")
                if os.path.exists(temp_path):
                    os.remove(temp_path)
        except Exception as e:
            print(f"Error running ffmpeg for {video}: {e}")
    else:
        print(f"File not found: {video}")
