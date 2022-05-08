# Insertion Sort

Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

## Features

**### Insertion**

- Create a Insertion-sort function
-For your own understanding, consider also stepping through these inputs:
    Reverse-sorted: [20,18,12,8,5,-2]
    Few uniques: [5,12,7,5,5,7]
    Nearly-sorted: [2,3,5,7,13,11]

- Write tests to prove the following functionality

    
## Approach & Efficiency

| method|Time complexity |Space complexity | 
| :---: | :---: | :---: |
|Insertion-sort|O(n^2): use while loop inside for loop| O(n)|

## Trace

Sample Array: [8,4,23,42,16,15]

pass 1:
  we have this array for test, for the first iteration i=0 j=1, and temp =[4]=>[i=0], then compare the first value with the next one,smaller number will be swapped with the current value in index i, and the place the smaller value.

pass 2: 
 for the second iteration i=1 j=2, and temp =[8]=>[i=1], then compare the second value with the next one,smaller number will be swapped with the current value in index i, and the place the smaller value.

then: 
 the i will increase by one also j in every iteration, and pass the value in the array in each time, until  the end of numbers
 the final array will be : [4,8,15,16,23,42]

## Whiteboard Process

![uml](./Whiteboard%20(10).png)
![test](./testinsert.png)




