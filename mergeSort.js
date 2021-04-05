/* MERGE SORT ALGORITHM FROM STACKABUSE https://stackabuse.com/merge-sort-in-javascript/  */
const merge = (left, right) => {
  let arr = [];

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  // Concatenating the leftover elements
  return arr.concat(left, right);
};

const mergeSort = (arr) => {
  // Base case
  if (arr.length === 1) {
    return arr;
  }

  const left = arr.splice(0, arr.length / 2);
  return merge(mergeSort(left), mergeSort(arr));
};