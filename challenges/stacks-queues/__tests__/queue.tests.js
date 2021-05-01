'use strict';

const Queue = require('../queue.js');

describe('****Queue Tests***', () => {
  it('should create an empty Queue', () => {
    let queue = new Queue;
    expect(queue.front).toEqual(null);
  });

  it('should add a node to the Queue', () => {
    let queue = new Queue;
    let first = 10;

    queue.enqueue(first);
    expect(queue.front.value).toEqual(10);
    // console.log(queue);
  });


  it('should add multiple nodes to the Queue', () => {
    let queue = new Queue;
    let first = 10;
    let second = 20;

    queue.enqueue(first);
    expect(queue.front.value).toEqual(10);
    queue.enqueue(second);
    expect(queue.front.next).toEqual({'next': null, 'value': 10});
  });

  it('should remove multiple nodes from the Queue', () => {
    let queue = new Queue;
    let first = 10;
    let second = 20;
    let third = 30;

    queue.enqueue(first);
    queue.enqueue(second);
    queue.enqueue(third);
    queue.dequeue();
    queue.dequeue();
    expect(queue.peek()).toEqual(third);
  });


  it('should return the value of the front of Queue', () => {
    let queue = new Queue;
    let first = 10;
    let second = 40;

    queue.enqueue(first);
    queue.enqueue(second);
    expect(queue.peek()).toEqual(first);
  });

  it('should return a string of all values in the Queue', () => {
    let queue = new Queue;
    let returnVal = '{ 20 } => { 10 } => NULL';
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.print()).toEqual(returnVal);
  });

  it('should return Null when trying to remove a node from an empty Queue', () => {
    let queue = new Queue;
    console.log(`inside test ${queue.dequeue()}`);
    expect(queue.dequeue()).toEqual(null);
    // console.log(queue);
  });

});
