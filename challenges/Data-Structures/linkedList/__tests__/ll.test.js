'use strict';

const LL = require('../lib/ll.js');

describe('****Linked List Tests***', () => {
  it('it should create an empty Linked List', () => {
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

  it('should properly point to indexed node in the Linked List', () => {
    let list = new LL;
    let first = 10;
    let second = 20;
    let third = 30;

    list.insert(first);
    list.insert(second);
    list.insert(third);
    expect(list.head.value).toEqual(30);
    expect(list.getByIndex(1).value).toBe(20);
  });

  it('should add multiple nodes to the Linked List', () => {
    let list = new LL;
    let first = 10;
    let second = 20;

    list.insert(first);
    expect(list.head.value).toEqual(10);
    list.insert(second);
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
    expect(list.toString()).toEqual(returnVal);
  });

  it('should insert a new node before a specified value', () => {
    let list = new LL;
    let first = 10;
    let second = 40;
    let third = 50;

    list.insert(first);
    list.insert(second);
    list.insert(third);

    list.insertBefore(40, 5);
    expect(list.getByIndex(1).value).toBe(5);
  });

  it('should insert a new node after a specified value', () => {
    let list = new LL;
    let first = 10;
    let second = 40;
    let third = 50;

    list.insert(first);
    list.insert(second);
    list.insert(third);

    list.insertAfter(40, 5);
    expect(list.getByIndex(1).value).toBe(40);
  });

  it('should find the node value kth from the end', () => {
    let list = new LL;
    let first = 10;
    let second = 40;
    let third = 50;
    let fourth = 90;
    let fifth = 17;

    list.insert(first);
    list.append(second);
    list.append(third);
    list.append(fourth);
    list.append(fifth);

    expect(list.kthFromEnd(2)).toBe(50);
    expect(list.kthFromEnd(4)).toBe(10);
    expect(list.kthFromEnd(-5)).toBe(null);
    expect(list.kthFromEnd(8)).toBe(null);
  });

  it('should take two Linked Lists and zip them together', () =>{
    let list1 = new LL;
    list1.insert(1);
    list1.append(3);
    list1.append(5);
    list1.append(7);

    let list2 = new LL;
    list2.insert(2);
    list2.append(4);
    list2.append(6);
    list2.append(8);

    let newList = list1.zipList(list1, list2);
    console.log(newList.toString());
    expect(newList.getByIndex(2).value).toBe(3);
    expect(newList.getByIndex(4).value).toBe(5);
    expect(newList.getByIndex(9)).toBe(null);
    expect(newList.length).toBe(8);
    expect(newList.includes(50)).toBeFalsy();
  });
});
