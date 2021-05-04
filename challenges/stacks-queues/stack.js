'use strict';

const Node = require('./node.js');

class Stack{
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    node.next = this.top;
    this.top = node;
    return this;
  }

  pop() {
    if (this.top === null) {
      return null;
    }
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (this.isEmpty() === null) {
      return null;
    }

    return this.top.value;
  }

  isEmpty() {
    return !this.top ? null : 'found top';
  }

  print() {
    let thisNode = this.top;
    let output = '';

    while (thisNode) {
      output = output.concat(`{ ${thisNode.value} } => `);
      thisNode = thisNode.next;
    }
    return output.concat('NULL');
  }
}

module.exports = Stack;
