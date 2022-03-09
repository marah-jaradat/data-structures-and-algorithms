"use strict";

const { describe, it } = require("eslint/lib/rule-tester/rule-tester");

const ll = require("../linked-list-kth");

describe("check kth  ", () => {
  it(" method ", () => {
    const llNew = new ll();
    llNew.insert(2);

    expect(llNew.kth(2)).toBe(8);
    expect(llNew.kth(-1)).toBe("exception");
  });
});
