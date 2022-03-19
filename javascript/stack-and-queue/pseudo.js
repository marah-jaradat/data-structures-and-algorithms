"use strict";

// const Node = require("../linked-list/node");
const Stack = require("./stack");
class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.storage = null;
    this.top = null;
  }
  enqueue(value) {
    let stack = new Stack(value);
    if (this.top === null) {
      this.top = this.stack2;
    } else {
      stack.next = this.stack1;
      this.top = this.stack2;
    }
  }
  dequeue() {
    if (this.top) {
      this.top = this.top.next;
      this.length--;
      return this.top.stack2;
    } else {
      return "exception";
    }
  }
}

module.exports = PseudoQueue;
