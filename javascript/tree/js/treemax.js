"use strict";

class TreeMax {
  constructor(root = null) {
    this.root = root;
  }

  getMaxVal() {
    if (this.root === null) {
      return "Empty tree!";
    }
    let currNode = this.root.value;

    const MaxTree = (node) => {
      if (!node) return "Empty tree!";
      currNode = node.value;
      let leftMax = MaxTree(node.left);
      let rightMax = MaxTree(node.right);
      if (leftMax > currNode) currNode = leftMax;
      if (rightMax > currNode) currNode = rightMax;
      return currNode;
    };
    MaxTree(this.root);
    return currNode;
  }
}

module.exports = TreeMax;
