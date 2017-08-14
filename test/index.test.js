'use strict';

const expect = require('chai').expect;
const request = require('supertest');
const describe = require('mocha').describe;
const it = require('mocha').it;

const app = require('server.js');

describe('Hello world', function () {
  it('Should respond with "Hello, world!"', function (done) {
    request(app)
      .get('/sayhello')
      .end(function (err, res) {
        expect(err).to.equal(null);
        expect(res.text).to.equal('Hello, world!');
        done();
      });
  });
});
