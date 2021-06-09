'use strict';

const Hashmap = require('./left-join.js');

let left = new Hashmap(3);

left.set('fond', 'enamored');
left.set('wrath', 'anger');
left.set('diligent', 'employed');
left.set('outfit', 'garb');
left.set('guide', 'usher');


let right = new Hashmap(3);

right.set('fond', 'averse');
right.set('wrath', 'delight');
right.set('diligent', 'idle');
right.set('guide', 'follow');
right.set('flow', 'jam');


console.log(Hashmap.join(left, right));
