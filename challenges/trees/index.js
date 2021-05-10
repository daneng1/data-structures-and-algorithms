'use strict';

const BT = require('./binaryTree');
const BST = require('./binarySearchTree');

let binarySearchTree = new BST();
binarySearchTree.addNode(30);
binarySearchTree.addNode(10);
binarySearchTree.addNode(20);
binarySearchTree.addNode(1);
binarySearchTree.addNode(5);
binarySearchTree.addNode(35);
binarySearchTree.addNode(40);
binarySearchTree.addNode(36);
binarySearchTree.addNode(60);

console.log(binarySearchTree.contains(36));
console.log(binarySearchTree.contains(33));
console.log(binarySearchTree.findMaximumValue());

console.log(binarySearchTree.preOrder());
console.log(binarySearchTree.inOrder());
console.log(binarySearchTree.postOrder());

