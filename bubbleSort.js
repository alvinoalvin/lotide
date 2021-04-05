const swap = function(arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;

  return arr;
};

let bubbleSort = arr => {
  let len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j - 1] < arr[j]) {
        arr = swap(arr, j - 1, j);
      }

    }
  }
  return arr;
};

