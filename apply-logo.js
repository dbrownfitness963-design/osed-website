const fs = require('fs');
const path = require('path');

const source = 'c:\\Users\\domin\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\copilot-cli-images\\1779220517281-c0r3tssz.png';
const dest = path.join(__dirname, 'public', 'osed-logo.png');

try {
  fs.copyFileSync(source, dest);
  console.log('✅ Logo changed successfully!');
} catch (err) {
  console.error('Error:', err.message);
}
