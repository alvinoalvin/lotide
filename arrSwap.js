const swap = function (arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
  
  return arr;
};