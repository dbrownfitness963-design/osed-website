const fs = require('fs');
const path = require('path');

const logoPath = 'c:\\Users\\domin\\Downloads\\Gemini_Generated_Image_72pd3672pd3672pd (1).png';
const publicDir = path.join(process.cwd(), 'public');
const destPath = path.join(publicDir, 'osed-logo.png');

console.log('🎨 Copying new OSED logo...');
console.log(`Source: ${logoPath}`);
console.log(`Destination: ${destPath}`);

try {
  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Copy the file
  fs.copyFileSync(logoPath, destPath);
  console.log('\n✅ Logo updated successfully!');
  console.log('📝 Next: Refresh your browser to see the new logo');
} catch (err) {
  console.error('\n❌ Error copying logo:', err.message);
  process.exit(1);
}
