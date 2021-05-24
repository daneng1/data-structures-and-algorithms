'use strict';

function arrSort (arr) {
  const n = arr.length;

  for( let i = 0; i < n; i++) {
    for( let j = i+1; j < n; j++) {
      let num = arr[i];
      // console.log(`round ${j}: ${arr[j]}, ${num}`);
      if (arr[j] < num) {
        arr[i] = arr[j];
        arr[j] = num;
        console.log(arr);
      }
    }
  }return arr;

}

module.exports = arrSort;
