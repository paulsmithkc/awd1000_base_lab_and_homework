const express = require('express');
const debug = require('debug')('app:startup');
const path = require('path');

const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;

// create express server
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));

// serve file, etc.
app.get('/', (request, response) => {
  //response.type('text/plain').send('Home Page');
  response.sendFile(path.join(__dirname, 'public/index.html'));
});
app.post('/contactme', (request, response) => {
  const obj = {
    success: true,
    error: 'Message Sent!',
    data: {
      email: request.body.email,
      message: request.body.message
    }
  };
  response.type('application/json').send(obj);
  //response.type('text/plain').send(`Email: ${request.body.email}\nMessage: ${request.body.message}`);
});
app.use(express.static('public'));

// listen for connections
app.listen(port, () => {
  debug(`Server running at http://${hostname}:${port}/`);
});