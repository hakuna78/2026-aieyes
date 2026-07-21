from PIL import Image
import os

paths = [
    r"C:\Users\samsung\Downloads\2026-aieyes-main\2026-aieyes-main\public\images\study\1.jpg",
    r"C:\Users\samsung\Downloads\2026-aieyes-main\2026-aieyes-main\public\images\study\7.jpg"
]

for p in paths:
    img = Image.open(p)
    # 90 degrees counter-clockwise (or 270 clockwise) makes vertical images landscape
    # Alternatively, 90 degrees clockwise. Let's try 90 degrees clockwise (which is rotate(-90)).
    # Pillow's rotate takes angle in degrees counter-clockwise.
    # We will rotate by 270 degrees (which is 90 degrees clockwise)
    rotated = img.rotate(270, expand=True)
    rotated.save(p)
    print(f"Rotated {p}")
