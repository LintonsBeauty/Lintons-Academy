# Replace with your actual image folder path
$imageFolder = "src\assets\images"

# Create the "webp" subfolder if it doesn't exist
$webpFolder = Join-Path $imageFolder "webp"
New-Item -Path $webpFolder -ItemType Directory -Force

# Loop through image files
Get-ChildItem $imageFolder -Recurse -Include *.jpg,*.jpeg,*.png | ForEach-Object {
    # Get the original image path and base name
    $originalImage = $_.FullName
    $baseName = $_.BaseName

    # Create the WebP output path
    $webpPath = Join-Path $webpFolder "$baseName.webp"

    # Convert the image to WebP using ImageMagick
    & magick $originalImage -quality 90 $webpPath

    # Create width-responsive versions (optional)
    # Adjust the target widths and quality as needed
    $targetWidths = 480, 640, 1280, 1920
    foreach ($width in $targetWidths) {
        $responsivePath = Join-Path $webpFolder "$baseName-$width.webp"
		& magick $originalImage -resize "${width}x" -quality 90 $responsivePath
    }

    Write-Host "Converted: $($_.Name)"
}