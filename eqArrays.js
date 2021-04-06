const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (!(actual[i] === expected[i])) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
