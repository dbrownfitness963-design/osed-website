const fs = require('fs');
const path = require('path');

const src = path.resolve('c:\\Users\\domin\\Downloads\\Gemini_Generated_Image_72pd3672pd3672pd (1).png');
const dst = path.resolve('C:\\Users\\domin\\OSED Pt 2\\public\\osed-logo.png');

try {
  fs.copyFileSync(src, dst);
  console.log('✓ Logo replaced successfully!');
  console.log('New logo:', dst);
} catch (err) {
  console.error('Error copying logo:', err.message);
  process.exit(1);
}
