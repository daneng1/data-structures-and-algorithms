'use strict';

const BT = require('../binaryTree.js');
const BST = require('../binarySearchTree');

describe('______Binary Tree_____', () => {
  it('should create a new Binary Tree', () => {
    const tree = new BT;
    expect(tree.preOrder()).toEqual(null);
  });

  it('should add new nodes to the Binary Tree', () => {
    const tree = new BT;
    tree.addNode(5);
    tree.addNode(10);
    tree.addNode(3);
    expect(tree.root.val).toEqual(5);
    expect(tree.root.right.val).toEqual(10);
    expect(tree.root.left.val).toEqual(3);
  });

  it('should return proper preOrder, postOrder, and inOrder of the Binary Tree', () => {
    const tree = new BT;
    tree.addNode(5);
    tree.addNode(10);
    tree.addNode(3);
    tree.addNode(4);
    tree.addNode(6);
    tree.addNode(2);

    expect(tree.preOrder()).toEqual([5,3,2,4,10,6]);
    expect(tree.inOrder()).toEqual([2,3,4,5,6,10]);
    expect(tree.postOrder()).toEqual([2,4,3,6,10,5]);

  });

  it('should return true when searching for a valid value in the Binary Tree or false when searching for an invalid value', () => {
    const tree = new BT;
    tree.addNode(5);
    tree.addNode(10);
    tree.addNode(3);
    tree.addNode(4);
    tree.addNode(6);
    tree.addNode(2);

    expect(tree.contains(6)).toEqual(true);
    expect(tree.contains(11)).toEqual('Can not find 11 in the tree');


  });
});

describe('______Binary Search Tree_____', () => {
  it('should create a new Binary Tree', () => {
    const tree = new BST;
    expect(tree.preOrder()).toEqual(null);
  });

  it('should add new nodes to the Binary Tree', () => {
    const tree = new BST;
    tree.addNode(5);
    tree.addNode(10);
    tree.addNode(3);
    expect(tree.root.val).toEqual(5);
    expect(tree.root.right.val).toEqual(10);
    expect(tree.root.left.val).toEqual(3);
  });

  it('should return proper preOrder, postOrder, and inOrder of the Binary Tree', () => {
    const tree = new BST;
    tree.addNode(5);
    tree.addNode(10);
    tree.addNode(3);
    tree.addNode(4);
    tree.addNode(6);
    tree.addNode(2);

    expect(tree.preOrder()).toEqual([5,3,2,4,10,6]);
    expect(tree.inOrder()).toEqual([2,3,4,5,6,10]);
    expect(tree.postOrder()).toEqual([2,4,3,6,10,5]);

  });

  it('should return true when searching for a valid value in the Binary Tree or false when searching for an invalid value', () => {
    const tree = new BST;
    tree.addNode(5);
    tree.addNode(10);
    tree.addNode(3);
    tree.addNode(4);
    tree.addNode(6);
    tree.addNode(2);

    expect(tree.contains(6)).toEqual(true);
    expect(tree.contains(11)).toEqual('Can not find 11 in the tree');


  });
});
