"use strict";

const Queue = require("../queue");

describe("test queue", () => {
  it("testing if the Queue is created", () => {
    let queue = new Queue();
    expect(queue instanceof Queue).toBeTruthy();
  });

  it("peek into a queue", () => {
    let queue = new Queue();
    expect(queue.peek()).toBeNull();
  });

  it("successfully enqueue into a queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(3);
  });

  it("testing dequeue method", () => {
    const queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.front.value).toEqual(4);
  });

  it("dequeue or peek on empty queue ", () => {
    const fqueue = new Queue();
    const tqueue = new Queue();
    fqueue.enqueue(3);
    fqueue.enqueue(4);
    expect(fqueue.isEmpty()).toBeFalsy();
    expect(tqueue.isEmpty()).toBeTruthy();
  });
});
