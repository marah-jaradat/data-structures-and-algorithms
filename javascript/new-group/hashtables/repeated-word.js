"use strict";

const HashTable = require("./hashtable");

function repeatedWord(str) {
  const hashTable = new HashTable(10);
  let arr = str.split(" ");
  //   console.log(arr);
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (hashTable.contains(arr[i])) {
      result = arr[i];
      break;
    } else {
      hashTable.set(arr[i], 1);
    }
  }
  return result;
}
module.exports = repeatedWord;
