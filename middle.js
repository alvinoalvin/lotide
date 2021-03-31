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

const middle = function(midArr) {
  if ((midArr.length === 1) || (midArr.length === 2)) {
    return [];
  } else if ((midArr.length % 2) === 0) {
    return [midArr[Math.floor(midArr.length / 2) - 1], midArr[Math.floor(midArr.length / 2)]];
  } else if ((midArr.length % 2) === 1) {
    return [midArr[Math.floor(midArr.length / 2)]];
  }
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
