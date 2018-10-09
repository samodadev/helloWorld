/* HomeWork#1 simple 'Hello World' by Osamu Noda*/

// dependecies
const http = require('http');
const url = require('url');

//config
const port = 8005;

// create server
const server = http.createServer((req, res) => {

  // Get the requested path
  const parsedUrl = url.parse(req.url);
  const path = parsedUrl.pathname;

  //rougting
  switch (path) {
    case '/hello':
      const objToSend = {Hello: 'world'};
      res.writeHead(200, {"Content-Type": "application/json"});
      res.end(JSON.stringify(objToSend));
      break;
    default:
      res.writeHead(404);
      res.end('NOT FOUND');
  }
});

server.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
