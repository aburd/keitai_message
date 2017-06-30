const getOutput = require('./index');
const inputs = require('./test/testInputs');

const showOutput = input => {
  console.log(`${input} => ${getOutput(input)}`);
};

Object.keys(inputs).forEach(inputKey => {
  const input = inputs[inputKey];
  showOutput(input);
});
