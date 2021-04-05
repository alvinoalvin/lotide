const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];

assertArraysEqual(tail(words), ["Lighthouse", "Labs"]); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!