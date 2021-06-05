'use strict';

const Hashmap = require('./hashtable.js');

let hashmap = new Hashmap(10);

hashmap.add('dan', 'engel');
hashmap.add('beth', 'engel');
hashmap.add('lena', 'engel');
hashmap.add('jason', 'engel');
hashmap.add('laura', 'engel');
hashmap.add('oscar', 'engel');
hashmap.add('sharon', 'engel');
hashmap.add('nathan', 'engel');

console.log(hashmap.get('beth'));
console.log(hashmap.contains('beth'));
console.log(hashmap.contains('elizabeth'));

console.log(hashmap);
