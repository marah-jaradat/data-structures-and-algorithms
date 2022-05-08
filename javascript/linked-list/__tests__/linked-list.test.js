"use strict";

const { it } = require("eslint/lib/rule-tester/rule-tester");
const LinkedList = require("../ll");

describe("testing Linked List", () => {
  it("initiat an enpty list", () => {
    let ll = new LinkedList();

    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
});

describe("test inserting to ll", () => {
  it("can insert into the list", () => {
    let ll = new LinkedList();
    ll.insert("insertedList");
    expect(ll).toBeDefined();
    expect(ll.head.value).toBe("insertedList");
    expect(ll.head.next).toBeNull();
  });

  it("head properly point to first node in link", () => {
    let ll = new LinkedList();
    ll.insert("insertedFirst");
    expect(ll).toBeDefined();
    expect(ll.head.value).toEqual("insertedFirst");
  });

  it("Can insert multiple nodes into the list", () => {
    let ll = new LinkedList();
    ll.insert("insertedMultiple1");
    ll.insert("insertedMultiple2");
    ll.insert("insertedMultiple3");
    expect(ll).toBeDefined();
    expect(ll.head.value).toBe("insertedMultiple3");
    expect(ll.head.next.value).toBe("insertedMultiple2");
    expect(ll.head.next.next.value).toBe("insertedMultiple1");
    expect(ll.head.next.next.next).toBeNull();
  });
});

describe("test Include", () => {
  it("test if Will return true value", () => {
    let ll = new LinkedList();
    ll.insert("insertedMultiple1");
    ll.insert("insertedMultiple2");
    ll.insert("insertedMultiple3");
    expect(ll).toBeDefined();
    expect(ll.includes("insertedMultiple1")).toEqual(true);
    expect(ll.includes("insertedMultiple2")).toEqual(true);
    expect(ll.includes("insertedMultiple3333")).toEqual(false);
  });
});

describe("To string", () => {
  it("Can return a collection of all the values", () => {
    let ll = new LinkedList();
    ll.insert("c");
    ll.insert("b");
    ll.insert("a");
    // console.log(ll);
    expect(ll.toString()).toEqual("{ a } -> { b } -> { c } -> NULL");
  });
});
