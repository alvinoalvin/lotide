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

/* Function that removes all equal array values */
const without = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return [];
  }

  let rtnArr = [];
  for (let i = 0; i < actual.length; i++) {
    if (!assertEqual(actual[i], expected[i])) {
      rtnArr.push(actual[i]);
    }
  }
  return rtnArr;
};

/* Checks if 2 arrays are equal and return a message */
const assertArraysEqual = function(actual, expected) {
  if (eqArrays) {
    console.log("PASSED: [" + actual + "] === [" + expected + "]");
  } else {
    console.log("Failed: [" + actual + "] !== [" + expected + "]");
  }
};


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

let testArr = [1, 2, 3];
without(testArr, [1, 2, "3"]);
assertArraysEqual(testArr, [1, 2, 3]);