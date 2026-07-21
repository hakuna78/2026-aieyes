from PIL import Image

img1_path = r"C:\Users\samsung\Desktop\001 (1).jpg"
img2_path = r"C:\Users\samsung\Downloads\002.jpg"

img1 = Image.open(img1_path)
img2 = Image.open(img2_path)

print(f"img1 size: {img1.size}")
print(f"img2 size: {img2.size}")

img1_rgb = Image.new('RGB', img1.size, (255, 255, 255))
img1_rgb.paste(img1, mask=img1.split()[3] if img1.mode == 'RGBA' else None) if img1.mode == 'RGBA' else img1.convert('RGB')
if img1.mode != 'RGBA':
    img1_rgb = img1.convert('RGB')

img2_rgb = Image.new('RGB', img2.size, (255, 255, 255))
if img2.mode == 'RGBA':
    img2_rgb.paste(img2, mask=img2.split()[3])
else:
    img2_rgb = img2.convert('RGB')

pdf_path = r"C:\Users\samsung\Downloads\2026-aieyes-main\2026-aieyes-main\public\team_lstm.pdf"
img1_rgb.save(pdf_path, "PDF", resolution=100.0, save_all=True, append_images=[img2_rgb])
print(f"Saved PDF to {pdf_path}")
