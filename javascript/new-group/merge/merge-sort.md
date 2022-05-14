# Merge Sort

 is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then it merges the two sorted halves. The merge() function is used for merging two halves.

## Features

**### sorted**

- Create a merge-sort function
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
| Merge-sort|O(log(n)):used two while loops and recursive| O(n): it is recursive |


## Trace

### The pseudocode

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

Sample Array: [8,4,42,23]

pass 1:
  we have this array for test,we devide the array for two halves, and sort each one in every iteration, first the left side sorted is [4,8]

pass 2: 
 repeat the previous things and sort the right side it will be [23,42]

then: 
 keep iterate for each element, and check if left[0] < right[0] if it less then push it to new array , then reurn the  final array that we have. 

## Whiteboard Process
![uml](./mergewhite.png)
![test](./mergetest.png)





