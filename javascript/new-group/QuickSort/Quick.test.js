"use strict";

const quickSort = require("./Quick-Sort");

describe("quick Sort check", () => {
  it("sorted  array", () => {
    const arr = [8, 4, 23, 42, 16, 15];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it("test nearly sorted", () => {
    const arr = [2, 3, 5, 7, 13, 11];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([2, 3, 5, 7, 11, 13]);
  });
  it("test reversed", () => {
    const arr = [20, 18, 12, 8, 5, -2];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it("test few uniques", () => {
    const arr = [5, 12, 7, 5, 5, 7];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([5, 5, 5, 7, 7, 12]);
  });
});
