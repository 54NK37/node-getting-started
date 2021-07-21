const fs = require('fs');

async function main() {
  try{
    // value is returned if promise fullfilled
   
    const data = await fs.readFile(__filename);
    await fs.writeFile(__filename + '.copy', data);
    // More awaits here...

    // error is thrown if promise is rejected
  }
  catch(error)
  {
    // promise rejected
  }
}

main();
console.log('TEST');
