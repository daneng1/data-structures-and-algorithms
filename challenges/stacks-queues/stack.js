'use strict';

const Node = require('./node.js');

function Stack() {
  this.top = null;
  this.length = 0;
}

Stack.prototype.push = function(val) {

  const newNode = new Node(val);
  if (!this.top) {
    this.top = newNode;
    this.length++;
  } else {
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }
};

Stack.prototype.pop = function() {
  if (this.isEmpty() === null) {
    return null;
  }
  const temp = this.top.next;
  delete this.top;
  this.top = temp;
  return this;
};

Stack.prototype.peek = function() {
  if (this.isEmpty() === null) {
    return null;
  }

  return this.top.value;
};

Stack.prototype.isEmpty = function() {
  return !this.top ? null : 'found top';
};

Stack.prototype.print = function() {
  let thisNode = this.top;
  let output = '';

  while (thisNode) {
    output = output.concat(`{ ${thisNode.value} } => `);
    thisNode = thisNode.next;
  }
  return output.concat('NULL');
}

module.exports = Stack;
