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

const takeUntil = function(array, callback) {
  let cutArr = [];

  for (const elem of array) {
    if (callback(elem)) {
      return cutArr;
    } else {
      cutArr.push(elem);
    }
  }

  return cutArr;
};

/* [1, 2, 5, 7, 2] */
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

/* --- */
console.log('---');

/* ['I\'ve', 'been', 'to', 'Hollywood'] */
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

