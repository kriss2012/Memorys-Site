import os
import shutil

public_dir = "d:\\Memorys-Site\\public"
backup_dir = "d:\\Memorys-Site\\public_backup"

if os.path.exists(backup_dir):
    print("Restoring original files from backup...")
    for filename in os.listdir(backup_dir):
        backup_path = os.path.join(backup_dir, filename)
        dest_path = os.path.join(public_dir, filename)
        if os.path.isfile(backup_path):
            shutil.copy2(backup_path, dest_path)
            print(f"Restored {filename}")
else:
    print("Backup directory not found!")
