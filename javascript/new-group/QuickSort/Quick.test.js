"use strict";

const quickSort = require("./Quick-Sort");

describe("quick Sort check", () => {
  it("sorted  array", () => {
    const arr = [8, 4, 23, 42, 16, 15];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it("test nearly sorted", () => {
    const arr = [4, 8, 15, 16, 42, 23];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it("test reversed", () => {
    const arr = [42, 23, 16, 15, 8, 4];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it("test few uniques", () => {
    const arr = [8, 4, 4, 23, 23, 42, 16, 16, 15];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual([4, 4, 8, 15, 16, 16, 23, 23, 42]);
  });
});
