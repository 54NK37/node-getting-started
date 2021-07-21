const path = require('path');
const fs = require('fs');

const files = ['.bash_profile', '.npmrc'];

files.forEach(file => {
  const filePath = path.resolve("./", file);
  const data = fs.readFileSync(filePath);
  console.log('File data is', data);
});
