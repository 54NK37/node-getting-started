const http = require('http');

const requestListener = (req, res) => {
  // req -> Incoming request
  // res -> Server Response
  // both req and res are streams.
  console.log(req.url);
  res.end('Hello World\n');
}
const server = http.createServer();
server.on("request",requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});

