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

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  insertBefore(value, newValue) {
    let node = new Node(newValue);
    let current = this.head;

    if (value === this.head.value) {
      this.insert(newValue);
      return this.head;
    }
    while (current.next) {
      if (current.next.value === value) {
        node = current.next;
        current.next = node;
        return this.head;
      }
      current = current.next;
    }
  }

  insertAfter(newValue, value) {
    let node = new Node(newValue);
    let current = this.head;

    while (current.next) {
      current = current.next;

      if (current.value === value) {
        node.next = current.next;
        current.next = node;
      }
    }
  }
}
module.exports = LinkedList;
