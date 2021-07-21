// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.



  const id = setInterval(fiveTimes,1000)
var count=0
function fiveTimes()
{  ++count
    if(count<=5)
    {
        console.log('Hello :' + count)     
    }
    else{
        console.log('Done');
        clearInterval(id)
    }
}
