const middle = function(midArr) {
  if ((midArr.length === 1) || (midArr.length === 2)) {
    return [];
  } else if ((midArr.length % 2) === 0) {
    return [midArr[Math.floor(midArr.length / 2) - 1], midArr[Math.floor(midArr.length / 2)]];
  } else if ((midArr.length % 2) === 1) {
    return [midArr[Math.floor(midArr.length / 2)]];
  }
};

module.exports = middle;

