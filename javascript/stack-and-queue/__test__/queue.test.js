"use strict";

const Queue = require("../queue");

describe("testing the Queue", () => {
  it("testing if the Queue is created", () => {
    const newQueue = new Queue();
    expect(newQueue instanceof Queue).toBeTruthy();
    // expect(queue).toBeDefined();
    expect(newQueue.top).toBeNull();
  });

  it("Can enqueue into a queue", () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.top.value).toEqual(1);
    expect(newQueue.top.next.value).toEqual(2);
  });

  it("Can dequeue out of a queue the expected value", () => {
    const newQueue = new Queue();
    newQueue.enqueue(4);
    newQueue.enqueue(5);
    expect(newQueue.dequeue()).toEqual(4);
    expect(newQueue.dequeue()).toEqual(4);
  });

  it("Can peek into a queue, seeing the expected value", () => {
    const newQueue = new Queue();
    const newQueue2 = new Queue();
    newQueue.enqueue(3);
    newQueue.enqueue(4);
    expect(newQueue.peek().value).toBe(3);
    expect(newQueue2.peek()).toBe("exception");
  });

  it("testing isEmpty method", () => {
    const newQueue = new Queue();
    const newQueue2 = new Queue();
    newQueue.enqueue(3);
    newQueue.enqueue(4);
    expect(newQueue.isEmpty()).toBeFalsy();
    expect(newQueue2.isEmpty()).toBeTruthy();
  });
});
