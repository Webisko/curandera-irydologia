const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '..', 'public', '.htaccess');
const destDir = path.join(__dirname, '..', 'dist');
const dest = path.join(destDir, '.htaccess');

if (!fs.existsSync(source)) {
  // No .htaccess in public/ — nothing to do.
  process.exit(0);
}

if (!fs.existsSync(destDir)) {
  console.error('Expected build output directory does not exist:', destDir);
  process.exit(1);
}

fs.copyFileSync(source, dest);
