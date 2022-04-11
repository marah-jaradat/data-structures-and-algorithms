"use strict";
// const node = require("./node");
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    let result = [];

    let traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  inOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  postOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  // Max() {
  //   let arr = this.preOrder();
  //   let max = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > max) {
  //       max = arr[i];
  //     }
  //   }
  //   return max;
  // }

  BreadthFirst() {
    let arr = [];
    let qArr = [];
    qArr.push(this.root);
    while (qArr.length > 0) {
      let current = qArr.shift();
      arr.push(current.value);
      if (current.left) {
        qArr.push(current.left);
      }
      if (current.right) {
        qArr.push(current.right);
      }
    }
    return arr;
  }
}

module.exports = {
  BT: BinaryTree,
};
