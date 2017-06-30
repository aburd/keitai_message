'use strict';

var settings = {
  kakuteiBotan: '0',
  characterMaps: {
    '1': ['.', ',', '!', '?', ' '],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  },
};

/*
 * @function String getOutput // returns the text output of some input of numbers
 * @param String userInput
 */

var getOutput = function getOutput(userInput) {
  var unfilteredInputs = userInput.split(settings.kakuteiBotan);
  // kakutei button was not pressed
  if (unfilteredInputs[unfilteredInputs.length - 1] !== '') {
    return '';
  }
  // take out the empty string as a result of split
  var individualInputs = unfilteredInputs.filter(function(individualInput) {
    return individualInput !== '';
  });
  var individualCharacters = individualInputs.map(function(individualInput) {
    return getCharacter(individualInput, settings.characterMaps);
  });

  return individualCharacters.join('');
};

var getCharacter = function getCharacter(individualInput, characterMaps) {
  var inputToken = validateInput(individualInput);
  var characterMap = {
    set: characterMaps[inputToken.key],
  };
  characterMap.setLength = characterMap.set.length;

  var index = inputToken.length % characterMap.setLength;

  if (index === 0) {
    return characterMap.set[characterMap.setLength - 1];
  } else {
    return characterMap.set[index - 1];
  }
};

var validateInput = function validateInput(input) {
  // Input must not be empty
  if (input.length === 0) {
    throw new Error('User input must be greater than 0 keystrokes');
  }
  // Input must not be mixed
  // (this also means that the kakutei button was not pressed before continuing to the next key)
  var previousChar = '';
  var inputKey = input.split('').reduce(function(accCharString, char) {
    // If this is the first iteration, or the characters match
    if (previousChar === '' || char === previousChar) {
      accCharString += char;
    } else {
      // need to start over if there is a mismatch
      accCharString = char;
    }
    previousChar = char;
    return accCharString;
  }, '');

  return {
    length: inputKey.length,
    key: inputKey[0],
  };
};
