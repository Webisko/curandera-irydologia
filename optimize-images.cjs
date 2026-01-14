const sharp = require('sharp');
const path = require('path');

async function optimizeHeroImage() {
  const inputPath = path.join(__dirname, 'public', 'images', 'hero_3.webp');
  const outputMobilePath = path.join(__dirname, 'public', 'images', 'hero_3_mobile.webp');
  
  console.log('Optimizing hero image for mobile...');
  
  // Create mobile version (800px wide, high quality)
  await sharp(inputPath)
    .resize(800, null, {
      withoutEnlargement: true,
      fit: 'inside'
    })
    .webp({ quality: 85 })
    .toFile(outputMobilePath);
  
  console.log('✓ Mobile version created: hero_3_mobile.webp');
  
  // Get file sizes
  const fs = require('fs');
  const originalSize = fs.statSync(inputPath).size / 1024;
  const mobileSize = fs.statSync(outputMobilePath).size / 1024;
  
  console.log(`Original: ${originalSize.toFixed(2)} KB`);
  console.log(`Mobile: ${mobileSize.toFixed(2)} KB`);
  console.log(`Saved: ${(originalSize - mobileSize).toFixed(2)} KB (${((1 - mobileSize/originalSize) * 100).toFixed(1)}%)`);
}

optimizeHeroImage().catch(console.error);
