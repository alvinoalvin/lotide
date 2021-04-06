// /* Function that checks if 2 values */
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return true;
//   } else {
//     return false;
//   }
// };

// /* Function that checks if 2 arrays are equal */
// const eqArrays = function(actual, expected) {
//   for (let i = 0; i < actual.length; i++) {
//     if (!assertEqual(actual[i], expected[i])) {
//       return false;
//     }
//   }
//   return true;
// };

// /* Checks if 2 arrays are equal and return a message */
// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log("PASSED: " + actual + "===" + expected);
//   } else {
//     console.log("Failed: " + actual + "!==" + expected);
//   }
// };

/* finds the indicies of all the letters and shoves them into the object */
const letterPositions = function(sentence) {
  let countObj = {};

  //goes through each char
  for (let letter of sentence) {
    // if char is not already a key
    if (!countObj[letter] && letter !== ' ') {
      // go through string and add positions to array
      countObj[letter] = [];
      for (let index in sentence) {
        if (sentence[index] === letter) {
          countObj[letter].push(index);
        }
      }
    }
  }
  return countObj;
};

module.exports = letterPositions;
// assertArraysEqual(letterPositions("hello").h, ['0']);
// assertArraysEqual(letterPositions("hello").e, ['1']);
// assertArraysEqual(letterPositions("hello").l, ['2', '3']);
// assertArraysEqual(letterPositions("hello").o, ['4']);