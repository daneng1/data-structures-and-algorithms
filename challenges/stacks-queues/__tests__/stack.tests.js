'use strict';

const Stack = require('../stack.js');

describe('****Stack Tests***', () => {
  it('should create an empty Stack', () => {
    let stack = new Stack;
    expect(stack.top).toEqual(null);
  });

  it('should add a node to the Stack', () => {
    let stack = new Stack;
    let first = 10;

    stack.push(first);
    expect(stack.top.value).toEqual(10);
    // console.log(stack);
  });


  it('should add multiple nodes to the Stack', () => {
    let stack = new Stack;
    let first = 10;
    let second = 20;

    stack.push(first);
    expect(stack.top.value).toEqual(10);
    stack.push(second);
    expect(stack.top.next).toEqual({'next': null, 'value': 10});
  });

  it('should remove multiple nodes from the Stack', () => {
    let stack = new Stack;
    let first = 10;
    let second = 20;
    let third = 30;

    stack.push(first);
    stack.push(second);
    stack.push(third);
    stack.pop();
    stack.pop();
    expect(stack.peek()).toEqual(first);
  });


  it('should return the value of the top of Stack', () => {
    let stack = new Stack;
    let first = 10;
    let second = 40;

    stack.push(first);
    stack.push(second);
    expect(stack.peek()).toEqual(second);
  });

  it('should return a string of all values in the Stack', () => {
    let stack = new Stack;
    let returnVal = '{ 20 } => { 10 } => NULL';
    stack.push(10);
    stack.push(20);
    expect(stack.print()).toEqual(returnVal);
  });

  it('should return Null when trying to remove a node from an empty Stack', () => {
    let stack = new Stack;
    console.log(`inside empty Stack test ${stack.pop()}`);
    expect(stack.pop()).toEqual(null);
    // console.log(stack);
  });

});
