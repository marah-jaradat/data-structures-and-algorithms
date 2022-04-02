"use strict";
const Node = require("../linked-list/node");
class Queue {
  constructor() {
    this.front = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(value) {
    let node = new Node(value);
    if (this.front) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.front = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (this.front) {
      this.front.next = this.front;
      this.front = this.front.next;
      this.front.next = null;
      return this.front.value;
    } else {
      return "exception";
    }
  }

  peek() {
    if (this.front) {
      return this.front;
    } else {
      return "exception";
    }
  }

  isEmpty() {
    if (this.front) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Queue;
