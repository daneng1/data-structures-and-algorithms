'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }
  }

  includes(val) {
    let thisNode =this.head;
    while(thisNode) {
      if (thisNode.value === val) {
        console.log('Value Found');
        return true;
      }
      thisNode = thisNode.next;
    }
    return false;
  }

  toString() {
    let thisNode = this.head;
    let newString = '';

    if(thisNode === null) {
      return 'NULL';
    } else {
      while (thisNode !== null) {
        newString = newString.concat(`{ ${thisNode.value} } => `);
        thisNode = thisNode.next;
      }
    }
    return newString.concat('NULL');
  }
}

module.exports = LinkedList;
