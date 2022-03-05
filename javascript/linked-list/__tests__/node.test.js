"use strict";

const Node = require("../node.js");

describe("testing node", () => {
  it("testing creating a Node", () => {
    const value = "any value";
    const node = new Node(value);
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});
