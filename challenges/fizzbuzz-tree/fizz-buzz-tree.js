'use strict';


const fizzBuzzTree = (tree) => {
  if(!tree.root) return null;
  let results = tree;

  let _walk = node => {
    // console.log(node.val);
    if (node.val % 15 === 0) {
      node.val = 'FizzBuzz';
    } else if (node.val % 3 === 0) {
      node.val = 'Fizz';
    } else if (node.val % 5 === 0) {
      node.val = 'Buzz';
    } else {
      node.val = node.val.toString();
    }
    if (node.left) _walk(node.left);
    if (node.right) _walk(node.right);
  };

  _walk(results.root);
  return results;

};

module.exports = fizzBuzzTree;
