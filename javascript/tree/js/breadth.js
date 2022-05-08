"use srict";

// const Node = require("./node");
const BinaryTree = require("./binarytree");

class Breadth extends BinaryTree {
  BreadthiFrst() {
    let arr = [];
    let qArr = [];
    qArr.pushItem(this.root);
    while (qArr.length > 0) {
      let current = qArr.shift();
      arr.pushItem(current.value);
      if (current.left !== null) {
        qArr.pushItem(current.left);
      }
      if (current.right !== null) {
        qArr.pushItem(current.right);
      }
    }
    return arr;
  }
}

module.exports = Breadth;

// class BreadthTree {
//   constructor(root = null) {
//     this.root = root;
//   }
//   breadth() {
//     let arr = [];
//     let queue = [];
//     queue.enqueue(this.root);

//     while (queue.length > 0) {
//       let item = queue.shift();

//       arr.enqueue(item.value);

//       if (item.left === null && item.right === null) {
//         continue;
//       }
//       if (item.left !== null) {
//         queue.enqueue(item.left);
//       }
//       if (item.right !== null) {
//         queue.enqueue(item.right);
//       }
//     }
//     if (queue === null) {
//       return;
//     }
//   }
// }

// module.exports = BreadthTree;
