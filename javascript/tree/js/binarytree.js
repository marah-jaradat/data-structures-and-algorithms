"use strict";

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Pre-order >> root - left - right
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

  // In-Order >> left - root - right
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

  // Post-Order >> left  - right - root
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
  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    }
    const addNode = (node) => {
      if (node.value > value) {
        if (node.left === null) {
          node.left = newNode;
          this.length++;
        }
        addNode(node.left);
      } else if (node.value < value) {
        if (node.right === null) {
          node.right = newNode;
        }
        addNode(node.right);
      }
    };
    addNode(this.root);
  }
}

module.exports = BinaryTree;
