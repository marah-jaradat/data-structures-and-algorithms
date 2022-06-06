"use strict";

const graph = require("./graph.js");

describe("Deapth first", () => {
  let myGraph = new graph();
  myGraph.addNode("A");
  myGraph.addNode("B");
  myGraph.addNode("C");
  myGraph.addNode("D");
  myGraph.addNode("E");
  myGraph.addNode("F");
  myGraph.addNode("G");
  myGraph.addNode("H");
  myGraph.addEdge("A", "B", 5);
  myGraph.addEdge("A", "D", 3);
  myGraph.addEdge("B", "C", 2);
  myGraph.addEdge("B", "D", 3);
  myGraph.addEdge("C", "G", 3);
  myGraph.addEdge("D", "E", 4);
  myGraph.addEdge("D", "H", 8);
  myGraph.addEdge("D", "F", 10);
  myGraph.addEdge("H", "F", 1);
  it("check if it returns the correcct order ", () => {
    expect(myGraph.DepthFirst("A")).toEqual([
      "A",
      "B",
      "C",
      "G",
      "D",
      "E",
      "H",
      "F",
    ]);
  });
  let myGraph2 = new graph();
  it("check if graph is empty ", () => {
    expect(myGraph2.DepthFirst("")).toEqual("empty");
  });
  it("check if the start node is not exist", () => {
    myGraph2.addNode();
    expect(myGraph2.DepthFirst("")).toEqual(null);
  });
});
