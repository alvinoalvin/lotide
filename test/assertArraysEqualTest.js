const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]);


console.log("\nExpected: Fail");
assertArraysEqual([1, 5, 3], [3, 2, 1]);

assertArraysEqual(["Lighthouse", "Labs"], ["Lighthouse", "Labs"]);

console.log("\nExpected: Fail");
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);