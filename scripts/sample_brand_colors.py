from PIL import Image

def rgb_to_hex(r, g, b):
    return f"#{r:02x}{g:02x}{b:02x}".upper()

def sample_colors(image_path):
    img = Image.open(image_path).convert('RGBA')
    width, height = img.size
    
    # Let's sample specific coordinate points:
    # Navy glyph pixel at (60, 40)
    navy_pixel = img.getpixel((60, 40))
    navy_rgb = navy_pixel[:3]
    navy_hex = rgb_to_hex(*navy_rgb)

    # Slate glyph pixel at (97, 42)
    slate_pixel = img.getpixel((97, 42))
    slate_rgb = slate_pixel[:3]
    slate_hex = rgb_to_hex(*slate_rgb)

    print(f"Sampled Navy Pixel at (60, 40): RGBA={navy_pixel} -> HEX={navy_hex}")
    print(f"Sampled Slate Pixel at (97, 42): RGBA={slate_pixel} -> HEX={slate_hex}")

    return {
        "navy": {"rgba": navy_pixel, "hex": navy_hex},
        "slate": {"rgba": slate_pixel, "hex": slate_hex}
    }

if __name__ == '__main__':
    sample_colors('public/brand/logo.png')
