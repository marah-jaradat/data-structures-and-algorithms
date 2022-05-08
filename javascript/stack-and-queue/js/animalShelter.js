"use strict";

const queue = require("./queue");

class AnimalShelter {
  constructor() {
    this.queue1 = new queue();
    this.queue2 = new queue();
  }

  enqueue(animal) {
    if (animal.pref === "cat") {
      this.queue2.enqueue(animal);
      return animal;
    } else if (animal.pref === "dog") {
      this.queue1.enqueue(animal);
      return animal;
    } else {
      return "Invalid";
    }
  }

  dequeue(pref) {
    if (pref === "cat") {
      return this.queue2.dequeue(pref);
    } else if (pref === "dog") {
      return this.queue1.dequeue(pref);
    } else {
      return "null";
    }
  }
}
module.exports = AnimalShelter;
