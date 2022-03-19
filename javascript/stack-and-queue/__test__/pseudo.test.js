const pseudoQueue = require("../pseudo");

describe("testing the pseudoQueue", () => {
  it("testing if the pseudoQueue is created", () => {
    const newQueue = new pseudoQueue();
    expect(newQueue instanceof pseudoQueue).toBeTruthy();
    expect(newQueue).toBeDefined();
    // expect(newQueue.front).toBeNull();
  });
});
