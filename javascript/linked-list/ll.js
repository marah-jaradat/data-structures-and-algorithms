"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value) {
    let val = this.head;
    while (val) {
      if (val.value === value) return true;
      val = val.next;
    }
    return false;
  }

  toString() {
    let val = "";
    let nod = this.head;
    while (val) {
      nod = nod + `{${nod.value}} `;
      nod = nod.next;
    }
    return nod + "null";
  }

  append(value) {
    const anotherNode = new Node(value);
    if (!this.head) {
      this.head = anotherNode;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = anotherNode;
  }

  insertBefore(preValue, newValue) {
    let newnode = new Node(newValue);
    let current = this.head;
    if (preValue === this.head.value) {
      this.insert(newValue);
      return this.head;
    }
    while (current.next !== null) {
      if (current.next.value === preValue) {
        newnode = current.next;
        current.next = newnode;
        return this.head;
      }
      current = current.next;
    }
  }
}

module.exports = LinkedList;
module.exports = Node;
