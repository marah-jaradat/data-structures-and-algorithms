"use strict";

const Node = require("./node");
const BinaryTree = require("./binarytree");

class BST extends BinaryTree {
  constructor(root = null) {
    super(root);
    this.length = 0;
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

  contains(value) {
    if (this.length === 0) return "empty";
    let newNode = this.root;
    while (newNode) {
      if (newNode.value === value) {
        return true;
      } else if (newNode.value > value) {
        newNode = newNode.left;
      } else {
        newNode = newNode.right;
      }
    }
    return false;
  }
}

module.exports = BST;
