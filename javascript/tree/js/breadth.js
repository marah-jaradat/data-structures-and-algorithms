"use srict";

// const node = require("./node");

class BreadthTree {
  constructor(root = null) {
    this.root = root;
  }
  breadth() {
    let arr = [];
    let queue = [];
    queue.pushItem(this.root);

    while (queue.length > 0) {
      let item = queue.shift();

      arr.pushItem(item.value);

      if (item.left === null && item.right === null) {
        continue;
      }
      if (item.left !== null) {
        queue.pushItem(item.left);
      }
      if (item.right !== null) {
        queue.pushItem(item.right);
      }
    }
    if (queue === null) {
      return;
    }
  }
}

module.exports = BreadthTree;
