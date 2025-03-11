Compression Script:

Get-ChildItem $imageFolder -Recurse -Include *.jpg,*.jpeg,*.png | % {
  $outputPath = Join-Path  $_.DirectoryName "webp" ($_.BaseName + ".webp")
  & magick $_.FullName -quality 90 $outputPath
  Write-Host Converting $_.Name
}