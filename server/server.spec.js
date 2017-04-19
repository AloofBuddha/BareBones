const { expect } = require('chai');
const request = require('supertest');
const app = require('./server.js');

describe("Testing, Testing!", function () {
  it("should know 'hello world' is a string", function () {
    expect("hello world").to.be.a('string');
  });
});

describe("API", function () {
  describe('heartbeat', function () {
    it("is beating", function () {
      request(app)
        .get('/api/heartbeat')
        .expect("it's alive!")
    });
  });
});