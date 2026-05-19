#!/usr/bin/env python3
import shutil
import os
from pathlib import Path

src = r'c:\Users\domin\Downloads\Gemini_Generated_Image_72pd3672pd3672pd (1).png'
dst = r'C:\Users\domin\OSED Pt 2\public\osed-logo.png'

try:
    if not os.path.exists(src):
        print(f"ERROR: Source file not found: {src}")
        exit(1)
    
    # Create backup of old logo
    backup_path = dst.replace('.png', '.backup.png')
    if os.path.exists(dst):
        shutil.copy2(dst, backup_path)
        print(f"✓ Backed up old logo to: {backup_path}")
    
    # Copy new logo
    shutil.copy2(src, dst)
    print(f"✓ Logo replaced successfully!")
    print(f"  Source: {src}")
    print(f"  Destination: {dst}")
    
except Exception as e:
    print(f"✗ Error: {e}")
    exit(1)
