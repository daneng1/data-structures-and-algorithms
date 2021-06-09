'use strict';

const leftJoin = require('../left-join.js');
const Hashmap = require('../../hashtable/hashtable.js');

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


describe('___Left Join___', () => {
  it('should combine two hashmaps where the left values already exist', () => {

    expect(leftJoin(left,right)).not.toBeNull();
  });

  it('should combine two hashmaps where the left values already exist', () => {

    expect(leftJoin(left,right)).toBeDefined();
  });
});
