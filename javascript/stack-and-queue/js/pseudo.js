"use strict";

// const Node = require("../linked-list/node");
const stack = require("./stack");

class PseudoQueue {
  constructor() {
    this.stack1 = new stack();
    this.stack2 = new stack();
    this.top = null;
  }
  enqueue(value) {
    this.stack1.pushItem(value);
  }
  dequeue() {
    if (this.stack1.top === "null") {
      return "exception";
    } else {
      this.stack2.pushItem(this.stack1.top.value);
      this.stack1.popItem();
    }
  }
}

module.exports = PseudoQueue;
