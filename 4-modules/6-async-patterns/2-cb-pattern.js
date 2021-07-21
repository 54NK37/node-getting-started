const fs = require('fs');

// async reading
// callback is 1st registered with event loop - 1st iteration of eventloop
// then callback is called - 2nd iteration of eventloop
fs.readFile(__filename, function cb(err, data) {
  console.log('File data is', data);
});

console.log('TEST');
