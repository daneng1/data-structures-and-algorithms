'use strict';

const LinkedList = require('./lib/ll.js');

let ll = new LinkedList();

console.log('empty list', ll);

ll.insert(10);

console.log('one item', ll);

ll.insert(80);
ll.insert(990);

console.log('More items', ll);

console.log(ll.includes(80));


console.log(ll.toString());
