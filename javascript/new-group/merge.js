function Mergesort(arr) {
  let n = arr.length;
  if (n > 1) {
    let mid = n / 2;
    let left = arr[(0, mid)];
    let right = arr[(mid, n)];
    // sort the left side
    Mergesort(left);
    // sort the right side
    Mergesort(right);
    // merge the sorted left and right sides together
    Merge(left, right, arr);
  }
}

function Merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }
  if ((i = left.length)) {
    //    set remaining entries in arr to remaining values in right
  } else {
    //    set remaining entries in arr to remaining values in left
  }
}

module.exports = Merge;
module.exports = Mergesort;
