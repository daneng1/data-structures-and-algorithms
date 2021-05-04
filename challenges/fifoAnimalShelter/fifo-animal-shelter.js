'use strict';

const Queue = require('../stacks-queues/queue.js');


class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
  }

  newAnimal(breed, name) {
    if(breed !== 'dog' && breed !== 'cat') {
      return 'sorry we only accept cats and dogs';
    } else if (breed === 'dog') {
      this.dogQueue.enqueue(name);
      return this.dogQueue;
    } else if (breed === 'cat') {
      this.catQueue.enqueue(name);
      return this.catQueue;
    }
  }
  dequeueCat() {
    this.catQueue.dequeue();
    return this.catQueue;
  }
  dequeueDog() {
    this.dogQueue.dequeue();
    return this.dogQueue;
  }
  printCat() {
    return this.catQueue.print();
  }
  printDog() {
    return this.dogQueue.print();
  }
}

module.exports = AnimalShelter;
