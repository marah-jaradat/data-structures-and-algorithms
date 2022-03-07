"use strict";

const { it } = require("eslint/lib/rule-tester/rule-tester");
const LinkedList = require("../ll");

describe("testing Linked List", () => {
  it("test creating link list", () => {
    const ll = new LinkedList();
    expect(ll).toBeInstanceOf(LinkedList);
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });
});

describe("insert to the beginning of the LL", () => {
  it("test insert to an empty LL", () => {
    const ll = new LinkedList();
    ll.insert("m");
    expect(ll.head.value).toBe("m");
    expect(ll.head.next).toBeNull();
  });

  it("test toadd to not empty LL", () => {
    const ll = new LinkedList();
    ll.insert("o");
    ll.insert("n");
    expect(ll.head.value).toEqual("n");
    expect(ll.head.next.value).toEqual("o");
  });
});

describe("append to the end of the LL", () => {
  it("tes append ", () => {
    const ll = new LinkedList();
    ll.append("m");
    ll.append("n");
    ll.append("o");
    expect(ll.head.value).toBe("m");
    expect(ll.head.next.value).toBe("n");
    expect(ll.head.next.next.value).toBe("o");
    expect(ll.head.next.next.next).toBeNull();
  });
});

describe("check if it exists", () => {
  it("test include", () => {
    const ll = new LinkedList();
    ll.insert("a");
    ll.insert("b");
    expect(ll.includes("a")).toBe(true);
    expect(ll.includes("b")).toBe(true);
    expect(ll.includes("c")).toBeFalsy();
  });
});

describe("get string  ", () => {
  it("test  tostring ", () => {
    const ll = new LinkedList();
    ll.append("m");
    ll.append("n");
    ll.append("o");
    expect(ll.toString()).toBe("{ m } -> { n } -> { o } -> NULL");
  });
});

describe("insertBef", () => {
  it("insert before link", () => {
    const ll = new LinkedList();
    ll.insert("m");
    ll.insert("n");
    ll.insert("o");
    ll.insert("p");
    expect(ll.head.value).toEqual("m");
    expect(ll.head.next.value).toEqual("n");
    expect(ll.head.next.next.value).toEqual("o");
    expect(ll.head.next.next.nextvalue).toEqual("p");
    expect(ll.head.next.next.next).toBeNull();
  });
});
