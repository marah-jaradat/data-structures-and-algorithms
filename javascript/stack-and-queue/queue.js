"use strict";
const Node = require("../linked-list/node");
class Queue {
  constructor() {
    this.top = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(value) {
    let node = new Node(value);
    if (this.top) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.top = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (this.top) {
      this.top.next = this.top;
      this.top = this.top.next;
      this.top.next = null;
      return this.top.value;
    }
    return "exception";
  }

  peek() {
    if (this.top) {
      return this.top;
    } else {
      return "exception";
    }
  }

  isEmpty() {
    if (this.top) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Queue;
