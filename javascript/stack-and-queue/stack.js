"use strict";

const Node = require("../linked-list/node");

class Stack {
  constructor() {
    this.storage = new Node();
    this.top = null;
    this.length = 0;
  }
  pushItem(value) {
    this.storage.append(value);
    this.top = value;
    this.length++;
  }

  peak() {
    if (this.top) {
      return "exception";
    } else {
      return this.top;
    }
  }

  popItem() {
    if (this.top) {
      this.top = this.top.next;
      this.length--;
      return this.top.value;
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
