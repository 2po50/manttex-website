from PIL import Image, ImageOps
import os

src_root = "nuotraukos/darbai"
dst_root = "nuotraukos/optimized"
max_size = 1200
quality = 72

total_before = 0
total_after = 0
count = 0

for dirpath, dirnames, filenames in os.walk(src_root):
    for filename in filenames:
        if not filename.lower().endswith((".jpg", ".jpeg")):
            continue

        src_path = os.path.join(dirpath, filename)
        rel_path = os.path.relpath(src_path, src_root)
        dst_path = os.path.join(dst_root, rel_path)

        os.makedirs(os.path.dirname(dst_path), exist_ok=True)

        size_before = os.path.getsize(src_path)
        if size_before == 0:
            print(f"  PRALEISTA (tuscias): {src_path}")
            continue

        total_before += size_before

        try:
            img = Image.open(src_path)
            img = ImageOps.exif_transpose(img)
            img = img.convert("RGB")

            w, h = img.size
            if w > max_size or h > max_size:
                img.thumbnail((max_size, max_size), Image.LANCZOS)

            img.save(dst_path, "JPEG", quality=quality, optimize=True)

            size_after = os.path.getsize(dst_path)
            total_after += size_after
            count += 1

            saved_pct = (1 - size_after / size_before) * 100
            print(f"  {rel_path}: {size_before//1024}KB -> {size_after//1024}KB ({saved_pct:.0f}% maziau)")

        except Exception as e:
            print(f"  KLAIDA {src_path}: {e}")

print(f"\nViso: {count} nuotraukos")
print(f"Priesais: {total_before//1024//1024:.1f} MB")
print(f"Dabar:    {total_after//1024//1024:.1f} MB")
print(f"Sutaupyta: {(1 - total_after/total_before)*100:.0f}%")
