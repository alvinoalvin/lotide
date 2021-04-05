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

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));             // => true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));             // => false
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));   // => false

