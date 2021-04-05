/* Function that checks if 2 values */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

/* Function that checks if 2 arrays are equal */
const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (!assertEqual(actual[i], expected[i])) {
      return false;
    }
  }
  return true;
};

/* Checks if 2 arrays are equal and return a message */
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("PASSED: " + actual + "===" + expected);
  } else {
    console.log("Failed: " + actual + "!==" + expected);
  }
};

/* Function that transforms array according to the callback*/
const map = function(arr, callback) {
  // create an empty arr
  let transformed = [];
  // loop through each word
  for (let char of arr) {
    // transform and put into new arr
    transformed.push(callback(char));
  } // end loop
  // return new arr
  return transformed;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);


// const results1 = map(words, word => word[0]);
// console.log(results1);

// const map = function (array, callback) {
//   const results = [];
//   for (let item of array) {
//     results.push(callback(item));
//   }
//   return results;
// }