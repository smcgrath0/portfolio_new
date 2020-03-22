require('dotenv/config');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const server = express();
let PORT = process.env.PORT;

server.use(bodyParser.json());

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'An unexpected error has occurred'
  });
});
