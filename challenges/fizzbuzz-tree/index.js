'use strict';

const BST = require('../trees/binarySearchTree.js');
const fizzBuzz = require('./fizz-buzz-tree.js');

const tree = new BST();

tree.addNode(5);
tree.addNode(3);
tree.addNode(15);
tree.addNode(11);
tree.addNode(5);

console.log(tree);
console.log(fizzBuzz(tree));
