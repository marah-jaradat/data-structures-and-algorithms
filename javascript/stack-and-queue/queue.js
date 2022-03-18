"use strict";

const Node = require("../linked-list/node");

class Queue {
  constructor(key) {
    this.key = key;
    this.next = null;
    this.rear = null;
    this.front = null;
  }
  enqueue(value) {
    let node = new Node(value);

    if (this.front === null) {
      this.front = node;
      return;
    } else {
      // this.rear.next = node;
      this.rear = node;
    }
    this.length++;
    // this.storage.append(value);
  }
  dequeue() {
    if (this.front === null) {
      return "exception";
    }
    let current = this.front;
    this.front = current.next;
    current.next = null;
    return current.value;
  }
  // dequeue() {
  //   if (this.front === null) {
  //     return "exception";
  //   }
  //   let node = this.front;
  //   this.front = node.next;
  //   node.next = null;
  //   return node.value;
  // }

  peek() {
    if (this.length) {
      return this.storage.head.value;
    } else {
      return "exception";
    }
  }
  isEmpty() {
    if (this.length) {
      return false;
    } else {
      return true;
    }
  }
}
module.exports = Queue;
