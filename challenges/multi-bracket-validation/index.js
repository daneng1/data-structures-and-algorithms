'use strict';

const stack = require('./multiBracketValidation.js');

console.log(stack('(({}))'));
console.log(stack('(){}[dog]('));
