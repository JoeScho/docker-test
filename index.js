'use strict';

module.exports = sayHello;

function sayHello(req, res) {
  return res.send('Hello, world!');
}