// JS modules
const http = require('http')

// create server
const server = http.createServer((req,res)=>{
res.end('Hello world')
})

// activate created server
server.listen(4242,()=>{
    console.log('Server is Running ...')
})