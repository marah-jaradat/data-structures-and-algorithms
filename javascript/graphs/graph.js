"use strict";

const Edge = require("./edge");

class Graph {
  constructor() {
    this.adjList = new Map();
  }
  addNode(node) {
    return this.adjList.set(node, []);
  }
  addEdge(node1, node2, weight) {
    node1 || node2
      ? this.adjList.get(node1).push(new Edge(node2, weight))
      : null;
  }
  getNodes() {
    return this.adjList.keys();
  }

  getNeioughbors(node) {
    return this.adjList.get(node);
  }
  size() {
    return this.adjList.size;
  }
  //   removeEdge(node1, node2) {
  //     const neighbors = this.adjList.get(node1);

  //     const newNeighbors = neighbors.filter(
  //       (neighbor) => neighbor.vertex !== node2
  //     );

  //     this.adjList.set(node1, newNeighbors);
  //   }
  //   removeNode(node) {
  //     this.adjList.delete(node);
  //     this.adjList.forEach((value, key) => {
  //       const newNeighbors = value.filter((neighbor) => neighbor.vertex !== node);
  //       this.adjList.set(key, newNeighbors);
  //     });
  //   }
}

module.exports = Graph;
