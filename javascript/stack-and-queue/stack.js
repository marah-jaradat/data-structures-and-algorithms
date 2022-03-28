"use strict";

const Node = require("../linked-list/node");

class Stack {
  constructor() {
    this.storage = new Node();
    this.top = null;
    this.length = 0;
  }
  pushItem(value) {
    const node = new Node(value);
    if (this.top === null) {
      this.top = node;
      this.length++;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  peak() {
    if (this.top) {
      return this.top;
    } else {
      return "exception";
    }
  }

  popItem() {
    if (this.top) {
      let popValue = this.top;
      this.top = popValue.next;
      popValue.next = null;
      this.length--;
      return popValue.value;
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

module.exports = Stack;
