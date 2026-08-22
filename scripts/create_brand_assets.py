import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public/brand', exist_ok=True)

# SVG Logo Creation
svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 120" width="500" height="120" fill="none">
  <!-- Symbol / Monogram Mark -->
  <g id="logo-mark" transform="translate(10, 10)">
    <!-- Navy Shield / Geometric Foundation -->
    <path d="M20 15 L55 5 L80 20 L80 65 L50 95 L20 65 Z" fill="#1B2A4A" id="navy-glyph"/>
    <path d="M35 30 L55 22 L65 30 L65 58 L50 72 L35 58 Z" fill="#FFFFFF" fill-opacity="0.15"/>
    <!-- Slate Dynamic Globe / Orbit Accent -->
    <path d="M50 5 C75 5 95 25 95 50 C95 75 75 95 50 95" stroke="#7D8286" stroke-width="6" stroke-linecap="round" stroke-dasharray="10 6" id="slate-glyph"/>
    <circle cx="50" cy="50" r="14" fill="#1B2A4A"/>
    <circle cx="85" cy="30" r="7" fill="#7D8286"/>
    <circle cx="50" cy="50" r="7" fill="#FFFFFF"/>
  </g>

  <!-- Typography Wordmark -->
  <g id="logo-text" transform="translate(125, 28)">
    <text x="0" y="32" font-family="Inter, Manrope, system-ui, -apple-system, sans-serif" font-weight="900" font-size="28" fill="#1B2A4A" letter-spacing="1.5">YOUR SOURCE</text>
    <text x="210" y="32" font-family="Inter, Manrope, system-ui, -apple-system, sans-serif" font-weight="400" font-size="28" fill="#7D8286" letter-spacing="1.5">GLOBAL</text>
    <text x="2" y="58" font-family="Inter, Manrope, system-ui, -apple-system, sans-serif" font-weight="600" font-size="11" fill="#7D8286" letter-spacing="4">SOURCING. SOLUTIONS. SUCCESS.</text>
  </g>
</svg>'''

with open('public/brand/logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print("Created public/brand/logo.svg")

# Render crisp PNG logo
width, height = 500, 120
img = Image.new('RGBA', (width, height), (255, 255, 255, 0)) # transparent background
draw = ImageDraw.Draw(img)

# Navy color: #1B2A4A (27, 42, 74, 255)
navy_color = (27, 42, 74, 255)
# Slate color: #7D8286 (125, 130, 134, 255)
slate_color = (125, 130, 134, 255)

# Draw Navy glyph mark (polygon)
navy_points = [(30, 25), (65, 15), (90, 30), (90, 75), (60, 105), (30, 75)]
draw.polygon(navy_points, fill=navy_color)

# Draw Navy central node
draw.ellipse([(45, 45), (75, 75)], fill=navy_color)
draw.ellipse([(55, 55), (65, 65)], fill=(255, 255, 255, 255))

# Draw Slate orbital accent and nodes
draw.arc([(15, 15), (105, 105)], start=300, end=90, fill=slate_color, width=6)
draw.ellipse([(90, 35), (104, 49)], fill=slate_color)
draw.ellipse([(53, 98), (67, 112)], fill=slate_color)

# Draw placeholder representation of wordmark in pure colors
# Solid Navy bar & Slate bar for clear pixel sampling
# Let's draw text if default font available or geometric text blocks
try:
    font_large = ImageFont.truetype("arialbd.ttf", 26)
    font_regular = ImageFont.truetype("arial.ttf", 26)
    font_sub = ImageFont.truetype("arialbd.ttf", 10)
    draw.text((125, 30), "YOUR SOURCE", font=font_large, fill=navy_color)
    draw.text((315, 30), "GLOBAL", font=font_regular, fill=slate_color)
    draw.text((127, 65), "SOURCING . SOLUTIONS . SUCCESS", font=font_sub, fill=slate_color)
except Exception:
    # Fallback to standard bitmap text or blocks
    draw.rectangle([(125, 35), (300, 58)], fill=navy_color)
    draw.rectangle([(310, 35), (420, 58)], fill=slate_color)
    draw.rectangle([(125, 68), (380, 78)], fill=slate_color)

img.save('public/brand/logo.png', 'PNG')
print("Created public/brand/logo.png")
