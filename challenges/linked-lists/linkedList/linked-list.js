'use strict';

const LinkedList = require('./lib/ll.js');

let ll = new LinkedList();
let l1 = new LinkedList();
let l2 = new LinkedList();

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
ll.kthFromEnd(6);

l1.insert(1);
l1.append(3);
l1.append(2);
const list1 = l1;
console.log(`List 1:${list1}`);


l2.insert(5);
l2.append(9);
l2.append(4);
const list2 = l2;
console.log(`List 2:${list2}`);
ll.zipList(list1, list2);
// console.log('number at index 1:', ll.getByIndex(1));
// console.log('More items', ll);

// console.log(ll.includes(80));


console.log(ll.toString());
