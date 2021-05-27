'use strict';

const quickSort = require('../index.js');

describe('___Quick Sort___', () => {
  it('should take in an array of integers and sort them incrementally', () => {
    let arr = [43,21,65,74,32,25,75,86,2,7,4,9,62];

    expect(quickSort(arr)).toEqual([2, 4, 7, 9, 21, 25, 32, 43, 62, 65, 74, 75, 86]);

  });

  it('should error with an empty array', () => {
    let arr = [];

    expect(quickSort(arr)).toEqual('Error, please make sure your array contains only numbers and more than one number.');

  });

  it('should error with an array of strings', () => {
    let arr = ['2', '3', '4', '5'];

    expect(quickSort(arr)).toEqual('Error, please make sure your array contains only numbers and more than one number.');

  });
});
