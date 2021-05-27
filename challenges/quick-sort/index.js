'use strict';

// let arr = [54,1,78,3,21,7,98,37,52];

function quickSort(arr, left, right) {
  let position;
  if (arr.length > 1) {
    position = partition(arr, left, right);
    if (left < position - 1) {
      quickSort(arr, left, position - 1);
    }
    if (position < right) {
      quickSort(arr, position, right);
    }
  }
  // console.log(arr);
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  } return i;
}

function swap(arr, i, low) {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

function sorterArray(arr) {
  let left = 0;
  let right = arr.length -1;
  if (arr.length <= 1 || typeof arr[0] !== 'number') {
    return 'Error, please make sure your array contains only numbers and more than one number.';
  } else {
    quickSort(arr, left, right);
  }
  return arr;
}
// quickSort(arr);
// console.log(sorterArray());
module.exports = sorterArray;
