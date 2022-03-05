"use strict";

const { it } = require("eslint/lib/rule-tester/rule-tester");
const LinkedList = require("../ll");

describe("testing Linked List", () => {
  it("test creating new instance of link list", () => {
    const ll = new LinkedList();
    expect(ll).toBeInstanceOf(LinkedList);
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
});

describe("insert to the beginning of the LL", () => {
  it("add to an empty LL", () => {
    const ll = new LinkedList();
    ll.insert("a");
    expect(ll.head.value).toEqual("a");
    expect(ll.head.next).toBeNull();
  });
  it("add to not empty LL", () => {
    const ll = new LinkedList();
    ll.insert("a");
    ll.insert("b");
    expect(ll.head.value).toEqual("b");
    expect(ll.head.next.value).toEqual("a");
  });
});

describe("append to the end of the LL", () => {
  it("append to empty LL", () => {
    const ll = new LinkedList();
    ll.insert("a");
    expect(ll.head.value).toEqual("a");
    expect(ll.head.next).toBeNull();
  });
  it("append to not empty", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    expect(ll.head.value).toEqual("a");
    expect(ll.head.next.value).toEqual("b");
    expect(ll.head.next.next.value).toEqual("c");
    expect(ll.head.next.next.next).toBeNull();
  });
});

describe("check if it exists", () => {
  it("check", () => {
    const ll = new LinkedList();
    ll.insert("a");
    ll.insert("b");
    expect(ll.includes("a")).toBe(true);
    expect(ll.includes("b")).toBe(true);
    expect(ll.includes("c")).toBeFalsy();
  });
});

//"{ a } -> { b } -> { c } -> NULL"

describe("get string  ", () => {
  it("get string ", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    expect(ll.toString()).toBe("{ a } -> { b } -> { c } -> NULL");
  });
});
