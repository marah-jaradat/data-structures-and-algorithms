"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    try {
      const node = new Node(value);
      if (this.head) {
        node.next = this.head;
        this.head = node;
      } else {
        this.head = node;
      }
    } catch (error) {
      console.error("insert is invalid");
    }
  }

  includes(value) {
    try {
      let current = this.head;
      while (current) {
        if (current.value === value) return true;
        current = current.next;
      }
      return false;
    } catch (error) {
      console.error("include is invalid");
    }
  }

  toString() {
    try {
      let x = "";
      let current = this.head;
      while (current) {
        // x = x + current.value;
        x = x + `{ ${current.value} } -> `;
        current = current.next;
        // console.log(current + "test");
      }
      return x + "NULL";
    } catch (error) {
      console.error("include is invalid");
    }
  }
}
module.exports = LinkedList;
