'use strict';

const insertShiftArray = (arr, val) => {
  const newArr = [];
  const middleIndex = Math.ceil(arr.length / 2);
  for (let i=0; i<= arr.length; i++)
    if (i < middleIndex) {
      newArr.push(arr[i]);
    } else if (i === middleIndex) {
      newArr.push(val);
    } else if (i > middleIndex) {
      newArr.push(arr[i-1]);
    }
  return newArr;
};

module.exports = insertShiftArray;