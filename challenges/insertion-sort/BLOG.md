# Array Insertion Sort

> Insertion Sort is a sorting algorithm that traverses an array and sorts the values. The algorithm keeps track of the minimum value and places it in the fron tof the array whcih will be sorted incrementally.

## Pseudo Code

```
InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```

## Trace

Sample Array: `[8,2,1]`

*Pass 1:*

On the first pass, 8 is set as the minimum value. it is then compared to 2, which is smaller and so they are swapped in the array.

![Pass 1](insert-sort-01.png)

Next, 2 is compared to 1 which is smaller and they are also swapped in the array, resulting in [1,8,2] and the smallest value is now in the first postion of the array.

![Pass 1](insert-sort-02.png)

*Pass 2:*

On the second pass we start with the second number. It is compared to the next number which is smaller and they are swapped in the array resulting in [1,2,8] which is now incrementally sorted.

![Pass 1](insert-sort-03.png)
