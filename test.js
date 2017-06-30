var chai = require('chai');
var assert = chai.assert;
var getOutput = require('./index');

var input = {
  blank: '5',
  a: '20',
  b: '220',
  bLoop: '222220',
  helloWorld: '44033055505550666011011111090666077705550301110',
  keitai: '000555555550000330000444000080000200004440000',
  keitai: '0002255555555000012121233000077777444000080000200008888884440000',
};

describe('Phone input to text output', function() {
  it('Should not return anything if kakutei button is not pressed', function() {
    assert.equal(getOutput(input.blank), '');
  });

  it('Should return a', function() {
    assert.equal(getOutput(input.a), 'a');
  });

  it('Should return b', function() {
    assert.equal(getOutput(input.b), 'b');
  });

  it('Should loop around and return b', function() {
    assert.equal(getOutput(input.bLoop), 'b');
  });

  it('Should return "hello, world!"', function() {
    assert.equal(getOutput(input.helloWorld), 'hello, world!');
  });

  it('Should return "keitai"', function() {
    assert.equal(getOutput(input.keitai), 'keitai');
  });

  it('Should return "keitai" even with mixed inputs', function() {
    assert.equal(getOutput(input.keitai), 'keitai');
  });
});
