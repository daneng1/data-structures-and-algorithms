'use strict';

const Queue = require('../queue-with-stacks.js');

describe('-------Queues with Stacks---', () => {
  it('should create a new Queue', () =>{
    let pseudo = new Queue;
    expect(pseudo.front).toEqual(undefined);
  });

  it('should add a node to the queue', () => {
    let pseudo = new Queue;

    pseudo.enqueue(2);
    expect(pseudo.stack1.peek()).toEqual(2);
  });

  it('should add multiple nodes to the queue', () => {
    let pseudo = new Queue;

    pseudo.enqueue(2);
    pseudo.enqueue(4);
    pseudo.enqueue(6);
    expect(pseudo.stack1.peek()).toEqual(6);
  });

  it('should remove a node from the queue', () => {
    let pseudo = new Queue;

    pseudo.enqueue(2);
    pseudo.enqueue(4);
    pseudo.enqueue(6);
    pseudo.dequeue();
    expect(pseudo.stack1.peek()).toEqual(4);
  });

  it('should return an error when trying to remove from an empty queue', () => {
    let pseudo = new Queue;

    expect(pseudo.dequeue()).toEqual(null);
  });

  it('should return a string of all values in the Queue', () => {
    let pseudo = new Queue;
    let returnVal = '{ 50 } => { 40 } => { 30 } => { 20 } => { 10 } => NULL';
    pseudo.enqueue(10);
    pseudo.enqueue(20);
    pseudo.enqueue(30);
    pseudo.enqueue(40);
    pseudo.enqueue(50);
    expect(pseudo.stack1.print()).toEqual(returnVal);
  });
});
