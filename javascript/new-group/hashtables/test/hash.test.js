"use strict";

const HashTable = require("../hashtable");

describe("Hash Table", () => {
  it("Setting a key/value to your hashtable result", () => {
    const hashTable = new HashTable(10);
    expect(hashTable).toBeInstanceOf(HashTable);
  });
  it("Hashing the key value", () => {
    const hashTable = new HashTable(10);
    expect(hashTable.hash("marah")).toBe(1);
  });
  it("Retrieving based on a key", () => {
    const hashTable = new HashTable(10);
    hashTable.set("marah", "developer");
    expect(hashTable.get("marah")).toBe("developer");
  });
  it("Successfully returns null for a key", () => {
    const hashTable = new HashTable(10);
    expect(hashTable.get("marah")).toBe(null);
  });
  it("Successfully returns a list of all unique keys", () => {
    const hashTable = new HashTable(10);
    hashTable.set("marah", "developer");
    hashTable.set("age", "25");
    expect(hashTable.keys()).toEqual(["marah", "age"]);
  });
  it("test contains", () => {
    const hashTable = new HashTable(10);
    hashTable.set("marah", "developer");
    hashTable.set("age", "25");
    expect(hashTable.contains("marah")).toBe(true);
    expect(hashTable.get("marah", "developer")).toBe("developer");
    expect(hashTable.contains("age")).toBe(true);
    expect(hashTable.get("age", "25")).toBe("25");
  });
  it("Successfully handle a collision", () => {
    const hashTable = new HashTable(10);
    hashTable.set("marah", "developer");
    hashTable.set("age", "25");
    expect(hashTable.get("marah")).toBe("developer");
  });
  it("Successfully retrieve a value from a bucket", () => {
    const hashTable = new HashTable(10);
    hashTable.set("marah", "developer");
    hashTable.set("age", "25");
    expect(hashTable.get("marah")).toBe("developer");
    expect(hashTable.get("age", "25")).toBe("25");
  });
  it("Successfully hash a key to an in-range value", () => {
    const hashTable = new HashTable(10);
    hashTable.set("marah", "developer");
    hashTable.set("age", "25");

    expect(hashTable.hash("marah")).toBe(1);
  });
});
