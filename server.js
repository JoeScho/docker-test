'use strict';

const express = require('express');

const hw = require('./index.js');

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();

app.get('/sayhello', (req, res) => {
  hw(req, res);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

module.exports = app;
