"use strict";
const { BT } = require("../js/binarytree");
const node = require("../js/node");

let tree = null;

describe("testing BinaryTree", () => {
  beforeAll(() => {
    let first = new node(1);
    let second = new node(2);
    let third = new node(3);
    let fourth = new node(4);
    let fifth = new node(5);
    let sixth = new node(6);
    let seventh = new node(7);

    first.left = second;
    first.right = third;
    second.left = fourth;
    second.right = fifth;
    third.left = sixth;
    third.right = seventh;

    tree = new BT(first);
  });
  it("constructor", () => {
    expect(tree.root.value).toEqual(1);
  });

  it("preOrder method", () => {
    let output = [1, 2, 4, 5, 3, 6, 7];
    let preOrder = tree.preOrder();
    // console.log("preOrder output ---->", preOrder);
    expect(preOrder).toEqual(output);
  });
  it("inOrder method", () => {
    let output = [4, 2, 5, 1, 6, 3, 7];
    let inOrder = tree.inOrder();
    // console.log("inOrder output ---->", inOrder);
    expect(inOrder).toEqual(output);
  });
  it("postOrder method", () => {
    let output = [4, 5, 2, 6, 7, 3, 1];
    let postOrder = tree.postOrder();
    // console.log("postOrder output ---->", postOrder);
    expect(postOrder).toEqual(output);
  });

  it("BreadthFirst method", () => {
    let output = [1, 2, 3, 4, 5, 6, 7];
    let breadthFirst = tree.BreadthFirst();
    console.log("breadthFirst output ---->", breadthFirst);
    expect(tree.BreadthFirst()).toEqual(output);
  });
});
