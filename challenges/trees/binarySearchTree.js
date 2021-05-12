'use strict';

const Node = require('./node.js');
const Queue = require('../stacks-queues/queue');

class BinarySearchTree{
  constructor(root) {
    this.root = root;
  }

  addNode(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    const addNode = node => {
      if (!current[node]) {
        current[node] = newNode;
        return this;
      }
      current = current[node];
    };

    while (true) {
      if (val === current.val) {
        return this;
      }
      if (val < current.val) addNode('left');
      else addNode('right');
    }
  }

  contains(val) {
    if (!this.root) return undefined;
    let current = this.root,
      found = false;

    while (current && !found) {
      if (val < current.val) current = current.left;
      else if (val > current.val) current = current.right;
      else found = true;
    }
    if (!found) return `Can not find ${val} in the tree`;
    return found;
  }

  preOrder() {
    if(!this.root) return null;
    let results = [];

    let _walk = node => {
      results.push(node.val);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }

  inOrder() {
    if(!this.root) return null;
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left);
      results.push(node.val);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }

  postOrder() {
    if(!this.root) return null;
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.val);
    };

    _walk(this.root);
    return results;
  }

  findMaximumValue() {
    const newArr = this.postOrder();
    let maxVal = 0;
    for(let i=0;i<newArr.length;i++) {
      newArr[i]>maxVal ? maxVal = newArr[i] : maxVal;
    }
    return `this is the max value in the tree: ${maxVal}`;
  }

  breadthFirst() {
    const newArr = [];
    const queue = [this.root];

    if(!this.root) return null;
    while(queue.length !== 0) {
      for (let i=0; i<queue.length; i++) {
        let node = queue.shift();
        // console.log(node);
        newArr.push(node.val);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
      }
    }
    return newArr;
  }
}

module.exports = BinarySearchTree;
