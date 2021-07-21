// ECMASCRIPT becuase of .mjs extension

// ECMAScript modules
// Named import
import {createServer} from 'http'
const server = createServer((req,res)=>{
res.end('Hello world')
})
server.listen(4242,()=>{
    console.log('Server is Running ...')
})
