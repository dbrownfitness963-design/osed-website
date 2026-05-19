const fs = require('fs');
const path = require('path');

const srcPath = 'c:\\Users\\domin\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\copilot-cli-images\\1779220517281-c0r3tssz.png';
const destPath = path.join(process.cwd(), 'public', 'osed-logo.png');

try {
  // Ensure public directory exists
  const publicDir = path.dirname(destPath);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Read source file and write to destination
  const data = fs.readFileSync(srcPath);
  fs.writeFileSync(destPath, data);
  
  console.log('✅ New OSED logo applied successfully!');
  console.log(`Destination: ${destPath}`);
  console.log('🔄 Refresh your browser to see the new logo');
} catch (err) {
  console.error('❌ Error:', err.message);
  process.exit(1);
}
