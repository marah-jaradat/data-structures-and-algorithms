# Quick Sort

Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. 

 is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.It divides elements into smaller parts based on some condition and performing the sort operations on those divided smaller parts.

## Features

**sorted**

- Create a Quick Sort function
- In your blog article, visually show the output of processing this input array:
[8,4,23,42,16,15]
For your own understanding, consider also stepping through these inputs:

Reverse-sorted: [20,18,12,8,5,-2]
Few uniques: [5,12,7,5,5,7]
Nearly-sorted: [2,3,5,7,13,11]

- Write tests to prove the following functionality

    
## Approach & Efficiency

| method|Time complexity |Space complexity | 
| :---: | :---: | :---: |
|Quick-sort| O(log(n))"Avg case" O(n^2)"worst case": because the algorithm is recursive, & use if inside for loop | O(n): is recursive|

## Trace

### The pseudocode

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


**Sample Array**: [8,4,42,23]

**In General QuickSort works like this**:

 1. Select an element of the array. This element is generally called the pivot. Most often this element is either the first or the last element in the array.
 2. Then, rearrange the elements of the array so that all the elements to the left of the pivot are smaller than the pivot and all the elements to the right are greater than the pivot. The step is called partitioning. If an element is equal to the pivot, it doesn't matter on which side it goes.
 3. Repeat this process individually for the left and right side of the pivot, until the array is sorted.

pass 1: 
 repeat the previous things and sort the right side it will be [23,42]

then: 
 keep iterate for each element, and check if left[0] < right[0] if it less then push it to new array , then reurn the  final array that we have. 


## Whiteboard Process
![uml](./quick%20sort.png)
![test](./quickTest.png)





