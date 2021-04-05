/* Function that checks if 2 values */
const eqArrays = require("./eqArrays");

/* Checks if 2 arrays are equal and return a message */
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("PASSED: " + actual + "===" + expected + "\n");
  } else {
    console.log("Failed: " + actual + "!==" + expected + "\n");
  }
};

module.exports = assertArraysEqual;
