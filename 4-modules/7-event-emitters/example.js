const EventEmitter = require('events');
// Streams are Event Emitters
// process.stdin, process.stdout

const myEmitter = new EventEmitter()
// 1st event has to be subscribed ,then only it is triggered after emit
myEmitter.emit("EVENT")
myEmitter.on("EVENT",()=>{
    console.log("Event emitted was subscribed");
})
