
function repeat(i)
{
    let counter = 1;
    const id = setInterval(() => {
       
        console.log('Hello :' +i*1000);
        counter = counter + 1;
        if (counter == 6) {
            clearInterval(id)
            repeat(i+1)
        }
    }, i * 1000)

}

repeat(1)
