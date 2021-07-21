const theOneFunc = () => {
    console.log('Hello');
    setTimeout(()=>console.log('Hello'),4000)
};

setTimeout(theOneFunc, 4 * 1000);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
