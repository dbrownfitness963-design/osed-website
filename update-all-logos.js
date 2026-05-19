#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

try {
  const sourceImage = 'c:\\Users\\domin\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\copilot-cli-images\\1779220770410-dceg5bag.png';
  const baseDir = __dirname;

  // Verify source exists
  if (!fs.existsSync(sourceImage)) {
    console.error(`❌ Source logo not found: ${sourceImage}`);
    process.exit(1);
  }

  // Read the new logo
  const logoBuffer = fs.readFileSync(sourceImage);
  console.log(`📦 Source logo size: ${logoBuffer.length} bytes\n`);

  // Update main project
  const mainLogoPath = path.join(baseDir, 'public', 'osed-logo.png');
  fs.writeFileSync(mainLogoPath, logoBuffer);
  console.log(`✅ Updated: ${mainLogoPath}`);

  // Update backup
  const backupLogoPath = path.join(baseDir, 'public', 'osed-logo.backup.png');
  fs.writeFileSync(backupLogoPath, logoBuffer);
  console.log(`✅ Updated: ${backupLogoPath}`);

  // Update all subdirectories
  const subdirs = fs.readdirSync(baseDir).filter(f => {
    const fullPath = path.join(baseDir, f);
    return f.startsWith('osed-') && fs.statSync(fullPath).isDirectory();
  });

  console.log(`\nFound ${subdirs.length} subdirectories to update:\n`);

  subdirs.forEach(subdir => {
    const publicFolder = path.join(baseDir, subdir, 'public');
    if (fs.existsSync(publicFolder)) {
      const logoPath = path.join(publicFolder, 'osed-logo.png');
      try {
        fs.writeFileSync(logoPath, logoBuffer);
        console.log(`✅ Updated: ${logoPath}`);
      } catch (err) {
        console.log(`⚠️  Skipped: ${logoPath} (${err.message})`);
      }
    }
  });

  console.log('\n✨ All logos replaced with new design!');
  console.log('🎨 The new professional OSED logo is now active across all projects.');
} catch (err) {
  console.error('❌ Error:', err.message);
  process.exit(1);
}
