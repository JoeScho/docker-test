'use strict';

const expect = require('chai').expect;
const request = require('supertest');
const express = require('express');

const hw = require('index.js');

const app = require('server.js');

describe('Hello world', function (done) {
  it('Should respond with "Hello, world!"', function (done) {
    request(app)
      .get('/sayhello')
      .end(function (err, res) {
        expect(res.text).to.equal('Hello, world!');
        done();
      });
  });
});
