# Merge Sort

> Merge sort is a sorting algorithm that splits an array in half, sorts each half then merges the two halves back together and sorted incrementally.

### Link to Code

You can find the code here...
[https://github.com/daneng1/data-structures-and-algorithms/tree/main/challenges/merge-sort](https://github.com/daneng1/data-structures-and-algorithms/tree/main/challenges/merge-sort)

## Pseudo Code

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Trace

Sample Array: `[8,4,23,42,16,15]`

![Whiteboard](merge-sort.png)
