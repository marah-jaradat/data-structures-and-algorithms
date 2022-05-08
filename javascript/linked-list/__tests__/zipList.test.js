"use strict";

const { describe, it } = require("eslint/lib/rule-tester/rule-tester");

const LinkedList = require("../ll");

describe("testing linked-list-zip", () => {
  it("check linked-list-zip methods", () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    ll1.insert(1);
    ll1.insert(2);
    ll1.insert(3);
    ll2.insert(4);
    ll2.insert(5);
    ll2.insert(6);

    expect(ll1.zipLists(ll1, ll2)).toBe(
      "{ 3 } -> { 6 } -> { 2 } -> { 5 } -> { 1 } -> { 4 } -> NULL"
    );
  });
});
