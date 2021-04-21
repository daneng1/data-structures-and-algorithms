'use strict';

const binarySearch = (arr, x) => {
  let start= 0;
  let end = arr.length-1;
  for (let i=0; i<=end; i++){
    let mid=Math.floor((start + end)/2);
    if (arr[mid]===x) {
      console.log(mid);
      return mid;
    }
    else if (arr[mid] < x)
      start = mid + 1;
    else
      end = mid - 1;
  }

  console.log(-1);
  return -1;
};

module.exports = binarySearch;
