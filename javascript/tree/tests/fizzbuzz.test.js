"use strict";
const Node = require("../js/fizzbuzz/node");
const { BT } = require("../js/binarytree");
const fizzBuzzTree = require("../js/fizzbuzz/fizzbuzz");

let tree = null;
describe("testing FizzBuzz", () => {
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    one.left = two;
    one.right = three;
    two.left = six;
    three.left = four;
    three.right = five;

    tree = new BT(one);
  });

  it("fizzBuzz()", () => {
    let result = ["1", "buzz", "buzz", "buzz", "4", "5"];
    console.log("Fizz-Buzz output ---->", fizzBuzzTree(tree));
    expect(fizzBuzzTree(tree)).toEqual(result);
  });
});
