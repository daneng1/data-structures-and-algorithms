'use strict';

const Node = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.length = 0;
  }

  enqueue(val) {
    this.isEmpty();
    const newNode = new Node(val);
    if (!this.front) {
      this.front = newNode;
      this.length++;
    } else {
      newNode.next = this.front;
      this.front = newNode;
      this.length++;
    }
  }

  dequeue() {
    if (this.isEmpty() === null) {
      return null;
    }

    let temp = this.front;
    // console.log(`inside temp ${temp.value}`);
    while(temp.next.next) {
      temp = temp.next;
    }
    temp.next = null;
    delete this.temp;
    this.length--;
    return this;
  }

  isEmpty() {
    return !this.front ? null : 'found front';
  }

  peek() {
    this.isEmpty();

    let temp = this.front;
    while(temp.next) {
      temp = temp.next;
    }
    console.log(`inside peek ${temp.value}`);
    return temp.value;
  }
  print() {
    let thisNode = this.front;
    let output = '';

    while (thisNode) {
      output = output.concat(`{ ${thisNode.value} } => `);
      thisNode = thisNode.next;
    }
    return output.concat('NULL');
  }
}

module.exports = Queue;
