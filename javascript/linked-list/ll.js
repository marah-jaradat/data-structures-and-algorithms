"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value) {
    if (this.head !== null) {
      let val = this.head;
      while (val !== null) {
        if (val.value !== value) val = val.next;
        else return true;
      }
      return false;
    } else return false;
  }

  toString() {
    let newValue = "";
    if (this.head !== null) {
      let val = this.head;
      while (val !== null) {
        newValue = newValue + `{ ${val.value} } -> `;
        val = val.next;
      }
      newValue = newValue + `NULL`;
      return newValue;
    } else return "this is empty list";
  }
}
  append(value) {
    const anotherNode = new Node(value);
    let current = this.head;
    if (this.head == null) {
      this.head = anotherNode;
    } else {
      while (current.next != null) {
        current = current.next;
      }
      current.next = anotherNode;
    }
  }
  insertBefore(preValue, inValue) {
    const node = new Node(inValue);
    let current = this.head;
    while (current.next != null) {
        current = current.next;
        if (current.next.value == preValue) {
            node.next = current.next;
            current.next = node;
            return null;
        }
    }
}


module.exports = LinkedList;
