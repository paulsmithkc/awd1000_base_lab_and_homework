const http = require('http');
const debug = require('debug')('app:startup');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  debug(`request ${req.url}`);
  if (req.url == '/test') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is a test!');
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!!!!');
  }
});

server.listen(port, () => {
  debug(`Server running at http://${hostname}:${port}/`);
});