"use strict";

function quickSort(arr, left, right) {
  if (left < right) {
    const pos = partition(arr, left, right);
    quickSort(arr, left, pos - 1);
    quickSort(arr, pos + 1, right);
  }
}

function partition(arr, left, right) {
  const pos = arr[right];
  var low = left - 1;
  for (let i = left; i < right; i++) {
    if (arr[i] <= pos) {
      low++;
      swap(arr, low, i);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
}
function swap(arr, i, low) {
  const temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}
module.exports = quickSort;
