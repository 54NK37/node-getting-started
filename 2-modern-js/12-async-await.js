const https = require('https');

function fetch (url) {
  return new Promise((resolve, reject) => {
    const x =Math.random()*1000
    console.log(x);
    if(x< 500){
      resolve("Hi")
    }
    else{
      reject("Bye")
    }
  });
}

// fetch('https://www.google.com')
//   .then(data => {
//     console.log(data);
//   }).catch(err=>console.log(err));


// async turns function into promise
  async function read() {
   
  }

  read().then(data => {
        console.log(data);
      }).catch(err=>console.log(err));