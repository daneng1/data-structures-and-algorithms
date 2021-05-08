'use strict';

const Node = require('./node.js');

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
}

module.exports = BinarySearchTree;
