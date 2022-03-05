"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      //means LL is empty null is falsy value (not false)
      this.head = node;
    } else {
      //means LL is not empty
      node.next = this.head;
      this.head = node;
    }
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      //means LL is empty
      this.head = node;
    } else {
      //means LL is not empty
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  includes(value) {
    if (this.head !== null) {
      let pointer = this.head;
      while (pointer !== null) {
        if (pointer.value !== value) pointer = pointer.next;
        else return true;
      }
      return false;
    } else return false;
  }

  toString() {
    let allValues = "";
    if (this.head !== null) {
      let pointer = this.head;
      while (pointer !== null) {
        allValues = allValues + `{ ${pointer.value} } -> `;
        pointer = pointer.next;
      }
      allValues = allValues + `NULL`;
      return allValues;
    } else return "empty list";
  }
}
module.exports = LinkedList;
