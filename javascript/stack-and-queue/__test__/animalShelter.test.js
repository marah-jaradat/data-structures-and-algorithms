"use strict";

const animalShelter = require("../animalShelter");

describe("test AnimalShelter  ", () => {
  it("enqueue cat ", () => {
    const newQueue = new animalShelter();
    let testAnimal = { pref: "cat" };

    expect(newQueue.enqueue(testAnimal)).toMatchObject(testAnimal);
  });

  it("test Invalid input ", () => {
    const newQueue = new animalShelter();
    let testAnimal = { pref: "lion" };

    expect(newQueue.enqueue(testAnimal)).toBe("Invalid");
  });

  it("dequeue a cat ", () => {
    const newQueue = new animalShelter();
    let testAnimal = { pref: "cat" };

    newQueue.enqueue(testAnimal);

    expect(newQueue.dequeue("cat")).toMatchObject(testAnimal);
  });

  it("dequeue a dog ", () => {
    const newQueue = new animalShelter();
    let testAnimal1 = { pref: "dog" };

    newQueue.enqueue(testAnimal1);

    expect(newQueue.dequeue("dog")).toMatchObject(testAnimal1);
  });
});
