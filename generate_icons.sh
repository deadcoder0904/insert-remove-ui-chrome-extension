# download image magick

# manifest icons 16x16, 24x24, 32x32, 48x48, 64x64, 128x128
# page action 19x19, 38x38
# browser action 19x19, 32x32, 64x64

convert icon128.png -resize 16x16 -quality 100 icon16.png
convert icon128.png -resize 24x24 -quality 100 icon24.png
convert icon128.png -resize 32x32 -quality 100 icon32.png
convert icon128.png -resize 48x48 -quality 100 icon48.png
convert icon128.png -resize 64x64 -quality 100 icon64.png

convert icon128.png -resize 19x19 -quality 100 icon19.png
convert icon128.png -resize 38x38 -quality 100 icon38.png