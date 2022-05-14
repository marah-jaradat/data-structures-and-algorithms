"use strict";

const mergeSort = require("./merge");

describe("Insertion Sort", () => {
  it("sorted  array", () => {
    const arr = [8, 4, 23, 42, 16, 15];
    expect(mergeSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it("test nearly sorted", () => {
    const arr = [4, 8, 15, 16, 42, 23];
    expect(mergeSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it("test reversed", () => {
    const arr = [42, 23, 16, 15, 8, 4];
    expect(mergeSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it("test few uniques", () => {
    const arr = [8, 4, 4, 23, 23, 42, 16, 16, 15];
    expect(mergeSort(arr)).toEqual([4, 4, 8, 15, 16, 16, 23, 23, 42]);
  });
});
