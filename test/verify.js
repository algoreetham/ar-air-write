/**
 * Zero-dependency integrity test for Spatial Paint
 */
const fs = require('fs');
const path = require('path');

console.log('Testing Spatial Paint integrity...');

// 1. Verify index.html exists and is readable
const htmlPath = path.join(__dirname, '..', 'index.html');
if (!fs.existsSync(htmlPath)) {
  console.error('FAIL: index.html missing!');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');

// 2. Verify Dahlia image asset exists
const imgPath = path.join(__dirname, '..', 'dahlia.jpg');
if (!fs.existsSync(imgPath)) {
  console.error('FAIL: dahlia.jpg missing!');
  process.exit(1);
}

// 3. Verify JavaScript syntax in index.html
const scriptMatches = [...html.matchAll(/<script[\s\S]*?>([\s\S]*?)<\/script>/gi)];
let testedScripts = 0;
for (const match of scriptMatches) {
  const code = match[1].trim();
  if (code) {
    new Function(code);
    testedScripts++;
  }
}

console.log(`PASS: All ${testedScripts} script blocks syntax-validated successfully!`);
console.log('PASS: All assets and configurations are healthy.');
