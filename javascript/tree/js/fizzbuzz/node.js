"use strict";
class Node {
  constructor(value, left = null, right = null, root = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.root = root;
  }
}
module.exports = Node;
