const { expect } = require('chai');

describe("Basic Test", function () {
  it("should know 'hello world' is a string", function () {
    expect("hello world").to.be.a('string');
  });
}); 