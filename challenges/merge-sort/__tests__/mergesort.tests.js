'use strict';

const mergeSort = require('../index.js');

describe('___Merge Test___', () => {
  it('should take in an array of integers and return them sorted in order', () => {
    let arr = [8,4,23,42,16,15];

    expect(mergeSort(arr)).toEqual([4,8,15,16,23,42]);
  });

  it('should take in a reverse ordered array of integers and return them sorted in order', () => {
    let arr = [20,18,12,8,5,-2];

    expect(mergeSort(arr)).toEqual([-2,5,8,12,18,20]);
  });

  it('should throw an error if the input is not an object', () => {
    let arr = '31, 27, 28, 42, 13, 8';

    expect(mergeSort(arr)).toEqual('Error! Please enter an array');
  });
});
