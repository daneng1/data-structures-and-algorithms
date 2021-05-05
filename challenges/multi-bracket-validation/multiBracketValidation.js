'use strict';

const Stack = require('../stacks-queues/stack.js');

function multiBracketValidation(input) {

  let brackets = '[]{}()';
  let stack = new Stack;
  if(!input || input.length === 0) {
    return null;
  }

  for(let i =0; i<input.length; i++) {
    let bracket = input[i];
    let bracketIndex = brackets.indexOf(bracket);


    if (bracketIndex === -1){
      continue;
    }

    if(bracketIndex % 2 === 0) {
      stack.push(bracketIndex + 1);
    } else {
      if(stack.pop() !== bracketIndex) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

module.exports = multiBracketValidation;
