'use strict';

const LinkedList = require('./lib/ll.js');

let ll = new LinkedList();

console.log('empty list', ll);

ll.insert(100);

// console.log('one item', ll);

ll.insert(80);
ll.insert(990);
ll.insert(200);
ll.insert(400);
console.log(ll.toString());

ll.insertBefore(200,5);
console.log(ll.toString());
ll.insertAfter(200,9);
// console.log('number at index 1:', ll.getByIndex(1));
// console.log('More items', ll);

// console.log(ll.includes(80));


console.log(ll.toString());
