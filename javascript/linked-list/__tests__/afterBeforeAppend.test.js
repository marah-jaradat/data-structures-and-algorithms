"use strict";

const { it } = require("eslint/lib/rule-tester/rule-tester");
const LinkedList = require("../ll");

describe("testing Linked List", () => {
  it("Can successfully add a node to the end of the linked list", () => {
    let ll = new LinkedList();
    ll.insert("addNode");

    expect(ll.head.next).toBeNull();
  });

  it("Can successfully add multiple nodes", () => {
    let ll = new LinkedList();
    ll.insert("addMultiNode1");
    ll.insert("addMultiNode2");
    expect(ll.head.next.value).toEqual("addMultiNode1");
    expect(ll.head.next.next).toBeNull();
  });

  it("Can insert a node before a node at a middle of a linked list", () => {
    let ll = new LinkedList();
    ll.insert("addMultiNode1");
    ll.insert("addMultiNode2");
    ll.insert("addMultiNode3");
    ll.insertBefore("addMultiNode2", "addMultiNode222");
    expect(ll.head.next.value).toEqual("addMultiNode2");
    expect(ll.head.next.next.value).toEqual("addMultiNode1");
  });

  it("Can insert a node before the first node", () => {
    let ll = new LinkedList();
    ll.insert("addMultiNode1");
    ll.insert("addMultiNode2");

    ll.insertBefore("addMultiNode2", "addMultiNode222");
    expect(ll.head.value).toEqual("addMultiNode222");
  });

  it("Can insert after a node in the middle", () => {
    let ll = new LinkedList();
    ll.insert("addMultiNode1");
    ll.insert("addMultiNode2");
    ll.insert("addMultiNode3");
    ll.insertAfter("addMultiNode234", "addMultiNode2");
    expect(ll.head.next.value).toEqual("addMultiNode2");
    expect(ll.head.next.next.value).toEqual("addMultiNode234");
  });

  it("Can insert a node after the last node", () => {
    let ll = new LinkedList();
    ll.insert("addMultiNode1");
    ll.insert("addMultiNode2");
    ll.insert("addMultiNode3");
    ll.insertAfter("addMultiNode234", "addMultiNode3");
    expect(ll.head.next.next.value).toEqual("addMultiNode1");
    expect(ll.head.next.next.next).toBeNull();
  });
});
