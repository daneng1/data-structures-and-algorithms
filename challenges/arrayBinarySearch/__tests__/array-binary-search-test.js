'use strict';

// const supertest = require('supertest');
const arrayBinary = require('../array-binary-search.js');



describe('***Testing Array Binary***', () => {
  it('It should return an array index of a number provided if the numer is in the array or -1 if it is not in the array', () => {
    expect(arrayBinary([4,8,15,16,23,42], 15)).toStrictEqual(2);
    expect(arrayBinary([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
    expect(arrayBinary([1,2,3,5,6,7], 4)).toStrictEqual(-1);
  });
});
