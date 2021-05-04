'use strict';

const Queue = require('./fifo-animal-shelter.js');

let queue = new Queue;

queue.newAnimal('dog', 'fido');
queue.newAnimal('dog', 'harry');
queue.newAnimal('dog', 'pepper');
queue.newAnimal('dog', 'oscar');

console.log(queue.printDog());
queue.dequeueDog();
console.log(queue.printDog());

queue.newAnimal('cat', 'spots');
queue.newAnimal('cat', 'loki');
queue.newAnimal('cat', 'booger');
queue.newAnimal('cat', 'socks');

console.log(queue.printCat());
queue.dequeueCat();
console.log(queue.printCat());
