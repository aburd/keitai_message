var chai = require('chai');
var assert = chai.assert;
var getOutput = require('../index');

var inputs = require('./testInputs');

describe('Phone inputs to text output', function() {
  it('Should not return anything if kakutei button is not pressed', function() {
    assert.equal(getOutput(inputs.blank), '');
  });

  it('Should return a', function() {
    assert.equal(getOutput(inputs.a), 'a');
  });

  it('Should return b', function() {
    assert.equal(getOutput(inputs.b), 'b');
  });

  it('Should loop around and return b', function() {
    assert.equal(getOutput(inputs.bLoop), 'b');
  });

  it('Should return "hello, world!"', function() {
    assert.equal(getOutput(inputs.helloWorld), 'hello, world!');
  });

  it('Should return "keitai"', function() {
    assert.equal(getOutput(inputs.keitai), 'keitai');
  });

  it('Should return "keitai" even with mixed inputs', function() {
    assert.equal(getOutput(inputs.keitaiMixed), 'keitai');
  });

  it('Should return "keitai" even with invalid letter inputs', function() {
    assert.equal(getOutput(inputs.keitaiLetter), 'keitai');
  });
});
