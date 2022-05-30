const graph = require("./graph");
let myGraph;

describe("Testing Graphs", () => {
  beforeEach(() => {
    myGraph = new graph();
  });

  it("test the sortedfunction", () => {
    expect(myGraph).toBeInstanceOf(graph);
  });

  it("Node can be successfully added to the graph", () => {
    myGraph.addNode(1);
    expect(myGraph.adjList.get(1)).toBeDefined();
  });

  it("An edge can be successfully added to the graph", () => {
    myGraph.addNode(1);
    myGraph.addNode(2);
    myGraph.addEdge(1, 2, 5);
    expect(myGraph.adjList.get(1).length).toBe(1);
  });

  it("Neighbors are returned with the weight between nodes included", () => {
    myGraph.addNode(1);
    myGraph.addNode(2);
    myGraph.addEdge(1, 2, 5);
    expect(myGraph.getNeioughbors(1)).toEqual([{ vertex: 2, weight: 5 }]);
  });

  it("The proper size is returned,", () => {
    myGraph.addNode(1);
    myGraph.addNode(2);
    expect(myGraph.size()).toBe(2);
  });

  it("representing the number of nodes in the graph", () => {
    myGraph.addNode(1);
    myGraph.addNode(2);
    myGraph.addNode(3);
    myGraph.addNode(4);
    myGraph.addNode(5);
    myGraph.addEdge(1, 2, 5);
    myGraph.addEdge(1, 3, 5);
    myGraph.addEdge(2, 3, 5);
    myGraph.addEdge(2, 4, 5);
    myGraph.addEdge(4, 5, 5);
    myGraph.addEdge(5, 3, 5);
    expect(myGraph.size()).toBe(5);
  });
  it("Testing breadth first", () => {
    myGraph.addNode(1);
    myGraph.addNode(2);
    myGraph.addNode(3);
    myGraph.addNode(4);
    myGraph.addNode(5);
    myGraph.addEdge(1, 2, 5);
    myGraph.addEdge(1, 3, 5);
    myGraph.addEdge(2, 3, 5);
    myGraph.addEdge(2, 4, 5);
    myGraph.addEdge(4, 5, 5);
    myGraph.addEdge(5, 3, 5);
    expect(myGraph.BreadthFirst(1)).toEqual(new Set([1, 2, 3, 4, 5]));
    let myGraph2 = new graph();
    expect(myGraph2.BreadthFirst("")).toEqual("Empty graph");
    myGraph2.addNode();
    expect(myGraph2.BreadthFirst("")).toEqual(null);
  });
});
