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

// TEST CODE
assertEqual("Chipmunk", "Chipmunk");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);