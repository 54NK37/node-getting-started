const express = require('express');

const server = express();

const user={
  "name" :"sanket",
  "age" :22
}

server.get("/get-user",(req,res)=>{
  console.dir(req,{depth:0});
  console.dir(res,{depth:0});
res.send(user)
})

server.get("/",(req,res)=>{
  res.send("Hello World")
})

server.listen(4242, () => {
  console.log('Express Server is running...');
});
