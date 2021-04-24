'use strict';

const LL = require('../lib/ll.js');

describe('****Linked List Tests***', () => {
  it('it should creat an empty Linked List', () => { 
    let list = new LL;
    expect(list.head).toEqual(null);
  });

  it('should add a node to the Linked List', () => {
    let list = new LL;
    let first = 10;

    list.insert(first);
    expect(list.head.value).toEqual(10);
    console.log(list);
  });

  it('should properly point to the head node in the Linked List', () => {
    let list = new LL;
    let first = 10;

    list.insert(first);
    expect(list.head.value).toEqual(10);
    console.log(list);
  });

  it('should add multiple nodes to the Linked List', () => {
    let list = new LL;
    let first = 10;
    let second = 20;

    list.insert(first);
    expect(list.head.value).toEqual(10);
    console.log(list);

    list.insert(second);
    console.log(list);
    expect(list.head.next).toEqual({'next': null, 'value': 10});
  });

  it('should return true when searching for a value in the linked list', () => {
    let list = new LL;
    let first = 10;

    list.insert(first);
    expect(list.includes(first)).toBeTruthy();
  });

  it('should return false when searching for a value NOT in the linked list', () => {
    let list = new LL;
    let first = 10;
    let second = 40;

    list.insert(first);
    expect(list.includes(second)).toBeFalsy();
  });

  it('should return a string of all values in the linked list', () => {
    let list = new LL;
    let returnVal = '{ 10 } => { 20 } => NULL';
    list.append(10);
    list.append(20);
    console.log(list.toString);
    expect(list.toString()).toEqual(returnVal);
  });
});
