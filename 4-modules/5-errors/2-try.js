const path = require('path');
const fs = require('fs');

const files = ['1-loop.js', 'kjkjhh', '.npmrc'];

files.forEach(file => {
  try {
    const filePath = path.resolve("./", file);
    const data = fs.readFileSync(filePath);
    console.log('File data is', data);
  } catch (err) {
    console.log('File not found');
  }
});
