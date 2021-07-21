function repeat(counter)
{
    setTimeout(()=>{
        console.log('Hello : '+counter);
        counter=counter+1000
        repeat(counter)
    },counter)
}

repeat(1000)

