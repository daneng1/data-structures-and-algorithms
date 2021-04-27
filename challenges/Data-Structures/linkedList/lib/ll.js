'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  }

  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.length++;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
      this.length++;
    }
  }

  includes(val) {
    let thisNode =this.head;
    while(thisNode) {
      if (thisNode.value === val) {
        // console.log('Value Found');
        return true;
      }
      thisNode = thisNode.next;
    }
    return false;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
      // console.log(current);
    }
    return current;
  }

  kthFromEnd(k) {
    if (k < 0 || k > this.length) return null;
    const target = (this.length) - k;
    let current = this.head;
    for( let i=1;i <= this.length; i++) {
      if (i === target) {
        return current.value;
      } else {
        current = current.next;
      }
    }
  }


  // insertBeforeIndex(index, newValue) {
  //   const newNode = new Node(newValue);
  //   if (index === 0 || index === 1) return this.insert(newValue);
  //   const previous = this.includes(index -2);
  //   if (previous === null) return null;

  //   newNode.next = previous.next;
  //   previous.next = newNode;
  //   this.length++;
  // }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      return 'empty list';
    } else if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      while(current.next) {
        if(current.next.value === value) {
          // console.log(`found the value`, current.next.value);
          newNode.next = current.next;
          current.next = newNode;
          return this;
        }
        current = current.next;
      }
      this.length++;
      return this;
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      return 'empty list';
    } else if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      while(current.next) {
        if(current.value === value && current.next !== null) {
          console.log(`found the value`, current.value);
          newNode.next = current.next;
          current.next = newNode;
          return this;
        }
        current = current.next;
      }
      this.length++;
      return this;
    }
  }

  // insertAfterIndex(index, newValue) {
  //   if (index >= this.length) return null;
  //   const previous = this.getByIndex(index);
  //   // if (previous === null) return null;

  //   const newNode = new Node(newValue);
  //   newNode.next = previous.next;
  //   previous.next = newNode;
  //   this.length++;
  // }

  toString() {
    let thisNode = this.head;
    let output = '';

    while (thisNode) {
      output = output.concat(`{ ${thisNode.value} } => `);
      thisNode = thisNode.next;
    }
    return output.concat('NULL');
  }
}

module.exports = LinkedList;
