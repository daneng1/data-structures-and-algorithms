'use strict';

const insert = require('../index');

describe('___Insertion Sort___', () => {
  it('should sort an array of numbers in order', () => {
    let arr = [8,4,23,42,16,15];

    expect(insert(arr)).toEqual([4,8,15,16,23,42]);
    console.log(arr);
  });

  it('should sort an array of numbers in order', () => {
    let arr = [20,18,12,8,5,-2];

    expect(insert(arr)).toEqual([-2,5,8,12,18,20]);
    console.log(arr);
  });

  it('should sort an array of numbers in order', () => {
    let arr = [2,3,5,7,13,11];

    expect(insert(arr)).toEqual([2,3,5,7,11,13]);
    console.log(arr);
  });
});
