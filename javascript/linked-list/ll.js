"use strict";

const { append } = require("cheerio/lib/api/manipulation");
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
    append(value){
        
    }
  }
}

module.exports = LinkedList;
