'use strict';

const Hashmap = require('../hashtable/hashtable.js');

function join(mapA, mapB) {
  let newHash = new Hashmap(mapA.size);

  mapA.storage.forEach(item => {
    let key = item.head.val[0];
    let left = mapA.get(key);
    let right = '';

    if (mapB.contains(key)) {
      right = mapB.get(key);
    } else {
      right = 'null';
    }
    newHash.set(key, {left, right});
  });
  return newHash;
}

module.exports = join;
