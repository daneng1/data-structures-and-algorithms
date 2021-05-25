'use strict';

function mergeSort (arr){
  if(typeof arr !== 'object') return 'Error! Please enter an array';
  const n = arr.length;
  const left = [];
  const right = [];

  if (n > 1) {
    const mid = Math.floor(n/2);
    for (let i=0;i<mid;i++) {
      left.push(arr[i]);
    }
    for(let i=0;i<left.length;i++) {
      for(let j=i+1; j<left.length; j++) {
        let num = left[i];
        if (left[j] < num) {
          left[i] = left[j];
          left[j] = num;
        }
      }
    }
    for (let j=mid;j<n;j++) {
      right.push(arr[j]);
    }
    for(let i=0;i<right.length;i++) {
      for(let j=i+1;j< right.length; j++) {
        let num = right[i];
        if (right[j] < num) {
          right[i] = right[j];
          right[j] = num;
        }
      }
    }
  }
  let newArr = [];

  console.log(left, right);
  const merge = (left, right) => {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i<left.length && j< right.length) {
      if (left[i] <= right[j]) {
        newArr[k] = left[i];
        i++;
      } else {
        newArr[k] = right[j];
        j++;
        // console.log(`J: ${j}`);
      } k++;
    }
    // console.log(`K: ${k}, I: ${i}, J: ${j}`);

    while (i < left.length || j < right.length ) {
      if (i === left.length) {
        newArr.push(right[j]);
        j++;
      } else {
        newArr.push(left[i]);
        i++;
      }
    }
    console.log(`New Array: ${newArr}`);
  };
  merge(left, right);
  return newArr;
}

// mergeSort([4,1,65,32,2,8,19]);

module.exports = mergeSort;
