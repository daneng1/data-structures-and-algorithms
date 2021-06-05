'use strict';

const Hashmap = require('../hashtable.js');
const hashmap = new Hashmap(3);

hashmap.add('dan', 'engel');
hashmap.add('beth', 'engel');
hashmap.add('lena', 'engel');
hashmap.add('jason', 'engel');
hashmap.add('laura', 'carey');
hashmap.add('oscar', 'engel');
hashmap.add('sharon', 'engel');
hashmap.add('nathan', 'engel');

describe('___Hashmap___', () => {
  it('should successfully add a key/value to the hashtable ', () => {

    expect(hashmap.contains('dan')).toEqual(true);
    expect(hashmap.contains('oscar')).toEqual(true);
    expect(hashmap.contains('fred')).toEqual(false);
  });

  it('should successfully return a value based on a key', () => {

    expect(hashmap.get('dan')).toEqual(['dan engel']);
    expect(hashmap.get('laura')).toEqual( ['laura carey']);
    expect(hashmap.get('fred')).toEqual(`no data containing fred`);
  });

  it('should successfully return null when a key does not exist in the hashtable', () => {

    expect(hashmap.contains('fred')).toEqual(false);
    expect(hashmap.get('fred')).toEqual(`no data containing fred`);
  });

  it('should successfully add a key/value to the hashtable ', () => {
    hashmap.add('beth', 'clement');
    expect(hashmap.contains('beth')).toEqual(true);
    expect(hashmap.get('beth')).toEqual(['beth clement', 'beth engel']);
  });
});
