// FUNCTION IMPLEMENTATION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!]
const assertEqual2 = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (!assertEqual(actual[i], expected[i])) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    if (Array.isArray(object1[key]) && (!eqArrays(object1[key], object2[key]) || (object1[key].length !== object2[key].length))) {
      return false;
    } else if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log("PASSED: " + inspect(actual) + "===" + inspect(expected));
  } else {
    console.log("Failed: " + inspect(actual) + "!==" + inspect(expected));
  }
};
assertObjectsEqual({ dog: ["asdf"], cat: ["sds"] }, { cat: ["sds"], dog: ["asdf"] });