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

  // zipLists(l1, l2) {
  //   let list1 = l1.head;
  //   let list2 = l2.head;

  //   while (list1.next && list2.next) {
  //     l2.head = l2.head.next;
  //     list2.next = list1.next;
  //     list1.next = list2;
  //     list2 = l2.head;
  //     list1 = l1.next;

  //     if (list1 || list2) {
  //       this.append(list1);
  //       list1 = l1.next;
  //       return list1;
  //     } else {
  //       this.append(list1.value);
  //       list2 = list2.next;
  //     }
  //     return list2;
  //   }
  // }

  zipLists(l1, l2) {
    let list1 = l1.head;
    let list2 = l2.head;
    while (l2.head && list1) {
      l2.head = l2.head.next;
      list2.next = list1.next;
      list1.next = list2;
      list2 = l2.head;
      list1 = list1.next.next;
    }
    while (l2.head) {
      l1.append(l2.head.value);
      l2.head = l2.head.next;
    }

    return l1.toString();
  }
}
module.exports = LinkedList;
