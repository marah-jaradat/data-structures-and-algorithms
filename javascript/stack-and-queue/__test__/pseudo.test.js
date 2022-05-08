"use strict";

const pseudoQueue = require("../pseudo");

describe("testing the pseudoQueue", () => {
  const newQueue = new pseudoQueue();
  it("pseudoQueue test", () => {
    expect(newQueue).toBeInstanceOf(pseudoQueue);
  });
  it("test enqueue", () => {
    newQueue.enqueue("4");
    newQueue.enqueue("9");
    newQueue.enqueue("7");
    newQueue.enqueue("8");
    expect(newQueue.stack1.top.value).toBe("8");
    expect(newQueue.stack2.top).toBeNull();
  });
  it("test dequeue()", () => {
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.stack2.top.value).toBe("4");
    expect(newQueue.stack1.isEmpty).toBeTruthy;
  });
});
