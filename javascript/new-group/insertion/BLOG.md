# Insertion Sort

is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. 

## Pseudocode

  InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp

## Sample Arrays

In your blog article, visually show the output of processing this input array:
    [8,4,23,42,16,15]


## Tracing

**pass 1:**

    we have this array [8,4,23,42,16,15] for test, for the first iteration i=1 j=0, and temp =[4]=>[i=1], then compare the first value with the next one,smaller number will be swapped with the current value in index i, and the place the smaller value, so temp=[8]=>[i=1], so the array now is [4,8,23,42,16,15]

**pass 2:**

    for the second iteration i=2 j=1, and temp =[23]=>[i=2], then compare the second value with the next one,it is smaller than the next number, will not swap. so the array in index 1= 2 is  [4,8,23,42,16,15] and in index j=1 [4,8,23,42,16,15]

**pass 3:**

    for the third iteration i=3 j=2, and temp =[42]=>[i=3], then compare this value with the next one,it is bigger, so will swap with the current value in index i, and the place the smaller value, so the array now is [4,8,23,16,42,15] and in index j=2 [4,8,23,16,42,15]

**pass 4:**

    for the fourth iteration i=4 j=3, and temp =[42]=>[i=4], then compare this value with the next one,it is bigger, so will swap with the current value in index i, and the place the smaller value, so temp=[8]=>[i=1], so the array now is [4,8,23,42,16,15], in index j=3 [4,8,16,23,42,15]
    then final array is  [4,8,16,23,42,15]

**pass 5:**

    for the fifth iteration i=5 j=4, and temp =[15]=>[i=5], then compare this value with the next one,it is bigger, so will swap with the current value in index i, and the place the smaller value, so the array now is [4,8,16,23,15,42], in index j=4 [4,8,16,15,23,42], in index j=4 [4,8,15,16,23,42]

**then:** 

    the loop will be stop with the final result:
     [4,8,15,16,23,42]


## Efficency

- Time Complexity: 
  - Worst case time complexity: Θ(n^2)
  - Average case time complexity: Θ(n^2)
  - Best case time complexity: Θ(n)
- Space complexity: Θ(1)