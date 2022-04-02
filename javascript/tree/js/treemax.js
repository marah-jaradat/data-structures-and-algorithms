"use strict";

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  Max() {
    let arr = this.order();
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
}

module.exports = Tree;
