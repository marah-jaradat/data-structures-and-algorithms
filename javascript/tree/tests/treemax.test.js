"use strict";

const maxt = require("../js/treemax");
// const maxt = require("../js/binarytree");
const Node = require("../js/node");

let tree = null;

describe("max-tree testing", () => {
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new maxt(one);
  });
  it("constructor", () => {
    expect(tree.root.value).toEqual(1);
  });

  it("testing the getMaxVal", () => {
    expect(tree.getMaxVal()).toEqual(9);
  });

  it("testing the the empty tree", () => {
    let newTree = new maxt();
    expect(newTree.getMaxVal()).toBe("Empty tree!");
  });
});
