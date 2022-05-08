// "user strict";

// function mergesort(arr) {
//   let n = arr.length;
//   if (n === 1) {
//     return arr;
//   }
//   if (n > 1) {
//     let mid = Math.floor(n / 2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid, n);
//     // sort the left side
//     mergesort(left);
//     // sort the right side
//     mergesort(right);
//     // merge the sorted left and right sides together
//     Merge(left, right, arr);
//     return arr;
//   }
// }

// function Merge(left, right, arr) {
//   let i = 0;
//   // let j = 0;
//   // let k = 0;

//   while (left.length && right.length) {
//     if (right[0] <= left[0]) {
//       // arr[k] = left[i];
//       arr[i++] = right.shift();
//       // i = i + 1;
//     } else {
//       arr[i++] = right.shift();
//       // arr[k] = right[j];
//       // j = j + 1;
//     }
//     // k = k + 1;
//   }
//   while (left.length) {
//     arr[i++] = left.shift();

//     //    set remaining entries in arr to remaining values in right
//   }
//   while (right.length) {
//     arr[i++] = right.shift();

//     //    set remaining entries in arr to remaining values in left
//   }
// }
// // let arr = [8, 4, 23, 42, 16, 15];
// // console.log(mergeSort(arr));

// // module.exports = Merge;
// module.exports = mergesort;

function mergeSort(arr) {
  const n = arr.length;

  if (n === 1) {
    return arr;
  }

  if (n > 1) {
    const mid = Math.floor(n / 2);

    const left = arr.slice(0, mid);

    const right = arr.slice(mid, n);
    // sort the left side
    mergeSort(left);
    // sort the right side
    mergeSort(right);
    // merge the sorted left and right sides together
    merge(left, right, arr);

    return arr;
  }
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (left.length && right.length) {
    if (right[j] <= left[k]) {
      arr[i++] = right.shift();
    } else {
      arr[i++] = left.shift();
    }
  }

  while (left.length) {
    arr[i++] = left.shift();
    //    set remaining entries in arr to remaining values in right
  }

  while (right.length) {
    arr[i++] = right.shift();
    //    set remaining entries in arr to remaining values in left
  }
}

let arr = [8, 4, 23, 42, 16, 15];
console.log(mergeSort(arr));

module.exports = mergeSort;
