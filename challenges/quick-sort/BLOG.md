# Quick Sort

> Quick Sort algorithm follows Divide and Conquer approach. It divides elements into smaller parts based on some condition and performing the sort operations on those divided smaller parts.

## Link to Code

You can find the code here...
[https://github.com/daneng1/data-structures-and-algorithms/tree/main/challenges/quick-sort](https://github.com/daneng1/data-structures-and-algorithms/tree/main/challenges/quick-sort)

## Pseudo Code

```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

## Process

Here are the steps to perform Quick sort that is being shown with an example [5,3,7,6,2,9].

STEP 1: Determine pivot as middle element. So, 7 is the pivot element.

STEP 2: Start left and right pointers as first and last elements of the array respectively. So, left pointer is pointing to 5 at index 0 and right pointer is pointing to 9 at index 5.

STEP 3: Compare element at the left pointer with the pivot element. Since, 5 < 6 shift left pointer to the right to index 1.

STEP 4: Now, still 3 <6 so shift left pointer to one more index to the right. So now 7 > 6 stop incrementing the left pointer and now left pointer is at index 2.

STEP 5: Now, compare value at the right pointer with the pivot element. Since 9 > 6 move the right pointer to the left. Now as 2 < 6 stop moving the right pointer.

STEP 6: Swap both values present at left and right pointers with each other.

STEP 7: Move both pointers one more step.

STEP 8: Since 6 = 6, move pointers to one more step and stop as left pointer crosses the right pointer and return the index of the left pointer.
## Whiteboard

![QuickSort](quicksort.png)

### Efficiency

Time - since this requires a nested loop, the big O(n log n).

Space - no additional space is needed and the space is 0(n).