# Implementation: Singly Linked Lists

Create singly linked- list and implement it

## Features

1. Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
2. Create a Linked List class with methods(insert,include,to string) and check the values
   - insert: create new link,point new link to old first link, point first link to the new one
   - include: loop through the list to check the values
   - to string: loop through the list and add them to the output, then return values with the last one"null".
3. Adding error handelers: 404 &500
4. Write tests to prove the following functionality

## Approach & Efficiency

| method|Time complexity |Space complexity | 
| :---: | :---: | :---: |
| insert|O(1): because used if | O(1)|
| include|O(n):using while and adding |O(n) |
| to string|O(n):using while loop and adding |O(n) |

## Whiteboard Process

![link list](./linked-list-implemintation.png)



