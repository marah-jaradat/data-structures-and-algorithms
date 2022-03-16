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

    if (this.rear === null) {
      this.rear = node;
      return;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.length++;
    // this.storage.append(value);
  }

  dequeue() {
    if (this.front === null) {
      return;
    }
    // let node = this.front;
    this.front = this.front.next;

    if (this.front === null) this.rear = null;
  }

  peek() {
    if (this.storage.head) {
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
