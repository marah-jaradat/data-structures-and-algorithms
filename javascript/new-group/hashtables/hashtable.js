"use strict";

const LinkedList = require("./ll");

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
    this.length = 0;
  }
  hash(key) {
    return (
      (key.split(" ").reduce((acc, curr) => {
        return acc + curr.charCodeAt();
      }, 0) *
        599) %
      this.size
    );
  }

  set(key, val) {
    const hashIndex = this.hash(key);
    if (!this.buckets[hashIndex]) {
      this.buckets[hashIndex] = new LinkedList();
    }
    let entryVal = { [key]: val };
    this.buckets[hashIndex].append(entryVal);
    this.length++;
  }

  get(key) {
    const hashIndex = this.hash(key);
    if (!this.buckets[hashIndex]) {
      return null;
    }
    let current = this.buckets[hashIndex].head;
    while (current) {
      if (current.value[key]) {
        return current.value[key];
      }
      current = current.next;
    }
    return null;
  }

  keys() {
    const keys = [];
    this.buckets.forEach((bucket) => {
      let current = bucket.head;
      while (current) {
        for (let key in current.value) {
          keys.push(key);
        }
        current = current.next;
      }
    });
    return keys;
  }

  contains(key) {
    const hashIndex = this.hash(key);
    if (!this.buckets[hashIndex]) {
      return false;
    }
    let current = this.buckets[hashIndex].head;
    while (current) {
      if (current.value[key]) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

module.exports = HashTable;
