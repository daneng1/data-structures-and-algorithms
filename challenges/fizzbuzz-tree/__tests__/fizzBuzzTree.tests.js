'use strict';

const BST = require('../../trees/binarySearchTree.js');
const fizzBuzz = require('../fizz-buzz-tree.js');

describe('****Fizz Buzz****', () => {
  it('should return null if no binary tree exists', () => {
    const tree = new BST();
    expect(fizzBuzz(tree)).toEqual(null);
  });

  it('should replace any number divisible by 5 with Buzz', () => {
    const tree = new BST();

    tree.addNode(5);
    tree.addNode(3);
    tree.addNode(15);
    tree.addNode(11);
    tree.addNode(5);
    const newTree = fizzBuzz(tree);
    expect(newTree.root.val).toEqual('Buzz');
  });

  it('should replace any number divisible by 3 with Fizz', () => {
    const tree = new BST();

    tree.addNode(3);
    tree.addNode(5);
    tree.addNode(15);
    tree.addNode(11);
    tree.addNode(5);
    const newTree = fizzBuzz(tree);
    console.log(newTree);
    expect(newTree.root.val).toEqual('Fizz');
  });

  it('should replace any number divisible by 3 and 5 with FizzBuzz', () => {
    const tree = new BST();

    tree.addNode(15);
    tree.addNode(3);
    tree.addNode(5);
    tree.addNode(11);
    tree.addNode(5);
    const newTree = fizzBuzz(tree);
    console.log(newTree);
    expect(newTree.root.val).toEqual('FizzBuzz');
  });

  it('should stringify any number not divisible by 3 or 5', () => {
    const tree = new BST();

    tree.addNode(11);
    tree.addNode(3);
    tree.addNode(5);
    tree.addNode(15);
    tree.addNode(5);
    const newTree = fizzBuzz(tree);
    console.log(newTree);
    expect(newTree.root.val).toEqual('11');
  });
});
