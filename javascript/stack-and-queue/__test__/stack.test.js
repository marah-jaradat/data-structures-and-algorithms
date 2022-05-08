"use strict";

const Stack = require("../stack");

describe("testing the Stack", () => {
  it("Can successfully instantiate an empty stack", () => {
    let newStack = new Stack();
    expect(newStack instanceof Stack).toBeTruthy();
  });

  it("Can successfully peek the next item on the stack", () => {
    let newStack = new Stack();
    expect(newStack.peak()).toBeNull();
  });

  it("Can successfully push onto a stack", () => {
    let newStack = new Stack();
    newStack.pushItem(1);
    newStack.pushItem(2);
    expect(newStack.top.value).toEqual(2);
    expect(newStack.top.next.value).toEqual(1);
  });

  it("Can successfully pop off the stack", () => {
    let newStack = new Stack();
    newStack.pushItem(1);
    newStack.pushItem(2);
    newStack.pushItem(3);
    newStack.pushItem(4);
    expect(newStack.popItem()).toEqual(3);
    expect(newStack.popItem()).toEqual(2);
    expect(newStack.popItem()).toEqual(1);
  });

  it("Can successfully peek the next item on the stack", () => {
    const newStack = new Stack();
    const newStack2 = new Stack();
    newStack.pushItem(3);
    newStack.pushItem(4);

    expect(newStack.isEmpty()).toBeFalsy();
    expect(newStack2.isEmpty()).toBeTruthy();
  });
});
