'use strict';

const Queue = require('./queue-with-stacks.js');

let queue = new Queue;

queue.enqueue(12);
queue.enqueue(43);
queue.enqueue(54);
queue.enqueue(29);
queue.enqueue(78);
queue.enqueue(61);

console.log(queue.stack1.print());


queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log('after dequeue', queue.stack1.print());
// console.log(queue.stack1.peek());
