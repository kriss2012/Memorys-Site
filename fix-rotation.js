// fix-rotation.js
// Run: node fix-rotation.js
// Requires: npm install sharp
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const jpgs = fs.readdirSync(publicDir).filter(f => /\.(jpg|jpeg)$/i.test(f));

console.log(`Found ${jpgs.length} images. Auto-rotating based on EXIF...`);

(async () => {
  let fixed = 0;
  for (const file of jpgs) {
    const filePath = path.join(publicDir, file);
    const tmpPath = filePath + '.tmp.jpg';
    try {
      await sharp(filePath)
        .rotate()           // auto-rotate using EXIF orientation
        .withMetadata()     // strip orientation tag after applying
        .jpeg({ quality: 92 })
        .toFile(tmpPath);
      fs.renameSync(tmpPath, filePath);
      fixed++;
      process.stdout.write(`\r✔ ${fixed}/${jpgs.length} fixed`);
    } catch (e) {
      console.error(`\nFailed: ${file} — ${e.message}`);
      if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    }
  }
  console.log(`\n\nDone! ${fixed} images auto-rotated.`);
})();
