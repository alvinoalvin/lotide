const tail = function(array) {
  let rtnArr = [];
  for (let i = 1; i < array.length; i++) {
    rtnArr.push(array[i]);
  }
  return rtnArr;
};

module.exports = tail;