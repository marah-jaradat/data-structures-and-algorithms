"use strict";

const BST = require("../js/BST");
const Tree = new BST();

describe("Testing Binary Search Tree ", () => {
  it(" Can instantiate an empty tree", () => {
    expect(Tree.root).toBeNull();
  });

  it(" Can instantiatewith a single root node", () => {
    Tree.add(1);
    expect(Tree.root.value).toBe(1);
    expect(Tree.root.right).toBeNull();
    expect(Tree.root.left).toBeNull();
  });

  it(" Can add to a single root node", () => {
    Tree.add(2);
    Tree.add(6);
    Tree.add(1);
    Tree.add(3);
    Tree.add(5);
    Tree.add(10);
    expect(Tree.length).toEqual(1);
    // expect(Tree.root.left.value).toEqual(2);
    expect(Tree.root.right.value).toEqual(2);
    expect(Tree.root.right.right.value).toEqual(6);
  });

  it("can search for a value", () => {
    expect(Tree.contains(1)).toBeTruthy();
    expect(Tree.contains(20)).toBeFalsy();
  });
  it("search in empty BinarySearchTree", () => {
    const newTree = new BST();
    expect(newTree.contains(7)).toBe("empty");
  });
});
