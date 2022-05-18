"use strict";

const Node = require("../linked-list/node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    let node = new Node(value);
    this.length++;
    if (this.head) {
      node.next = this.head;
      this.head = node;
      this.tail = node;
    } else {
      this.head = node;
      if (this.head.next === null) {
        this.tail = node;
      }
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
    if (!this.head) {
      let node = new Node(value);
      this.length++;
      this.head = node;
      this.tail = node;
    } else {
      let node = new Node(value);
      this.length++;
      node.next = null;
      let temp = this.tail;

      temp.next = node;
      this.tail = node;
    }
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
  Kth(k) {
    let current = this.head;
    let length = 0;
    while (current) {
      current = current.next;
      length++;
    }
    if (k < 0 || k > length) {
      return "exception";
    } else {
      length = length - 1 - k;
      current = this.head;
      while (length > 0) {
        current = current.next;
        length--;
      }
      return current.value;
    }
  }

  delete(val) {
    let current = this.head;
    let found = false;

    while (current && current.next) {
      if (current.next.value === val) {
        found = true;
        current.next = current.next.next;
        this.length--;
      }
      current = current.next;
    }

    if (!found) throw new Error("Value does not exist");
  }
}

module.exports = LinkedList;
