// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     return true;
//   } else {
//     return false;
//   }
// };
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;