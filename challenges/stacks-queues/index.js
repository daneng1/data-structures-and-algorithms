'use strict';

const Stack = require('./stack.js');
const Queue = require('./queue.js');

let queue = new Queue;
let stack = new Stack;

stack.push(5);
stack.push(23);
stack.push(47);
stack.push(87);
stack.push(12);

console.log(stack.print());
stack.pop();
console.log(stack.print());
console.log(stack.peek());

console.log(`empty queue ${queue.isEmpty()}`);
queue.enqueue(12);
queue.enqueue(43);
queue.enqueue(54);
queue.enqueue(76);
queue.enqueue(98);

console.log(queue.print());

queue.dequeue();
console.log(queue.print());
queue.dequeue();
console.log(queue.print());
queue.dequeue();
queue.enqueue(33);
console.log(queue.print());
queue.peek();
queue.dequeue();
queue.enqueue(99999);
console.log(queue.print());

