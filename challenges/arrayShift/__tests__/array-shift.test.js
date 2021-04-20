'use strict';

// const supertest = require('supertest');
const insertShiftArray = require('../array-shift.js');



describe('***Testing Array Shift***', () => {
  it('It should return an array with a new value inserted in the middle of the array', () => {
    expect(insertShiftArray([2,4,6,8], 5)).toStrictEqual([2,4,5,6,8]);
    expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
    expect(typeof insertShiftArray([4,8,15,16,23,42])).toEqual('object');
  });
});
