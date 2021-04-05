/* Function that checks if 2 values */
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

/* Function that checks if 2 arrays are equal */
const eqArrays = function (actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (!assertEqual(actual[i], expected[i])) {
      return false;
    }
  }
  return true;
};

/* Checks if 2 arrays are equal and return a message */
const assertArraysEqual = function (actual, expected) {
  if (eqArrays) {
    console.log("PASSED: " + actual + "===" + expected);
  } else {
    console.log("Failed: " + actual + "!==" + expected);
  }
};

const flatten = function (unlimited) {
  let flat = [];
  for (let val of unlimited) {
    if (Array.isArray(val)) {
      for (let innerVal of val) {
        flat.push(innerVal);
      }
    } else {
      flat.push(val);
    }
  }
  return flat;
};

console.log(flatten([1, 2, [3, 4, 1, 2], 5, [6]]));