"use strict";
const queue = require("./queue");

class AnimalShelter {
  constructor() {
    this.queue1 = new queue();
    this.queue2 = new queue();
  }

  enqueue(animal) {
    if (animal === "cat") {
      this.queue1.enqueue(animal);
    } else {
      this.queue2.enqueue(animal);
    }
  }

  dequeue(pref) {
    if (pref === "cat") {
      this.queue1.dequeue(pref);
    } else if (pref === "dog") {
      this.queue2.dequeue(pref);
    } else {
      return "null";
    }
  }
}
module.exports = AnimalShelter;
