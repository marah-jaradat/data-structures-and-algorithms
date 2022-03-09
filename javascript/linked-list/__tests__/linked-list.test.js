"use strict";

const { it } = require("eslint/lib/rule-tester/rule-tester");
const LinkedList = require("../ll");

describe("testing Linked List", () => {
  it("test creating link list", () => {
    let ll = new LinkedList();
    expect(ll).toBeInstanceOf(LinkedList);
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
});

describe("test inserting to ll", () => {
  it("test insert", () => {
    let ll = new LinkedList();
    ll.insert("myList");
    expect(ll.head.value).toBe("myList");
    expect(ll.head.next).toBeNull();
  });

  it("test to add to not empty LL", () => {
    let ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    expect(ll.head.value).toEqual("test2");
    expect(ll.head.next.value).toEqual("test1");
  });
});

describe("append to the end of the LL", () => {
  it("test multiple append ", () => {
    const ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    ll.insert("test3");
    expect(ll.head.value).toBe("test1");
    expect(ll.head.next.value).toBe("test2");
    expect(ll.head.next.next.value).toBe("test3");
    expect(ll.head.next.next.next).toBeNull();
  });
});

describe("check if it exists", () => {
  it("test includes", () => {
    let ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    expect(ll.includes("test1")).toBe(true);
    expect(ll.includes("test2")).toBe(true);
    expect(ll.includes("test3")).toBe(false);
  });
});

describe("get string", () => {
  it("test  tostring", () => {
    let ll = new LinkedList();
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    console.log(ll);
    expect(ll.toString()).toEqual(expect.any(String));
    expect(ll.toString()).toMatch("{1} -> {2} -> {3} -> NULL");
  });
});

describe("before", () => {
  it("test to insert before ll", () => {
    let ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    ll.insert("test3");
    ll.insert("test4");
    ll.insertBefore("test10");

    expect(ll.head.value).toEqual("test10");
    expect(ll.head.next.value).toEqual("test1");
    expect(ll.head.next.next.value).toEqual("test2");
    expect(ll.head.next.next.next.value).toEqual("test3");
    expect(ll.head.next.next.next.next.value).toEqual("test4");
    expect(ll.head.next.next.next.next).toBeNull();
  });
});

describe("after", () => {
  it("test to insert after ll", () => {
    let ll = new LinkedList();
    ll.append("test1");
    ll.append("test2");
    ll.append("test3");
    ll.append("test4");
    ll.insertAfter("test10");

    expect(ll.head.value).toEqual("test1");
    expect(ll.head.next.value).toEqual("test2");
    expect(ll.head.next.next.value).toEqual("test3");
    expect(ll.head.next.next.next.value).toEqual("test4");
    expect(ll.head.next.next.next.next.value).toEqual("test10");
    expect(ll.head.next.next.next.next).toBeNull();
  });
});
