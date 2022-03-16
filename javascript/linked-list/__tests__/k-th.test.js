"use strict";

const { describe, it } = require("eslint/lib/rule-tester/rule-tester");

const LinkedList = require("../ll");

describe("check kth  ", () => {
  it("k is greater than the length of list && k is not a positive integer", () => {
    let ll = new LinkedList();
    ll.insert("test");

    expect(ll.Kth(0)).toBe("test");
    expect(ll.Kth(-1)).toEqual("exception");
    expect(ll.Kth(7)).toEqual("exception");
  });

  it("k and the length of the list are the same", () => {
    let ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    ll.insert("test3");
    ll.insert("test4");
    expect(ll.Kth(0)).toEqual("test1");
  });

  it("Where the linked list is of a size 1", () => {
    const ll = new LinkedList();
    ll.insert("test1");
    expect(ll.Kth(1)).toEqual("test1");
  });

  it("Happy Path", () => {
    const ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    ll.insert("test3");
    ll.insert("test4");
    expect(ll.Kth(2)).toEqual("test3");
  });
});
