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
    ll.insert("c");
    expect(ll.head.value).toEqaul("c");
    expect(ll.head.next).toBeNull();
  });
  it("add to not empty LL", () => {
    const ll = new LinkedList();
    ll.insert("a");
    ll.insert("b");
    expect(ll.head.value).toEqaul("b");
    expect(ll.head.next.value).toEqaul("a");
  });
});

describe("append to the end of the LL",()=>{
  it("append to empty LL",(){
    const ll = new LinkedList();
    ll.insert("a");
    expect(ll.head.value).toEqaul("a");
    expect(ll.head.next).toBeNull();

  })
  it("append to not empty",()=>{
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    expect(ll.head.value).toEqaul("a");
    expect(ll.head.next.value).toEqaul("b");
    expect(ll.head.next.next.value).toEqaul("c");
    expect(ll.head.next.next.next).toBeNull;
  })
})
