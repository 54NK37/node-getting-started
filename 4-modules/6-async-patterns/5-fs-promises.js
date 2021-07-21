// some modules provides 1st level promises for inbuilt methods
const { readFile } = require('fs').promises;

async function main() {
  const data = await readFile(__filename);
  console.log('File data is', data);
}

main();

console.log('TEST');
