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

  BreadthFirst(start) {
    if (this.adjList.size === 0) {
      return "Empty graph";
    }
    if (!this.adjList.has(start)) {
      return null;
    }
    let queue = [];
    let visited = new Set();
    let current;
    queue.push(start);
    visited.add(start);
    while (queue.length) {
      let front = queue.shift();
      current = this.getNeioughbors(front);
      current.forEach((neighbor) => {
        if (!visited.has(neighbor.vertex)) {
          queue.push(neighbor.vertex);
          visited.add(neighbor.vertex);
        }
      });
    }
    return visited;
  }

  DepthFirst(start) {
    if (this.adjList.size === 0) {
      return "empty";
    }
    if (!this.adjList.has(start)) {
      return null;
    }
    let visitedNodes = [];
    let stack = [];
    const traverse = (node, visitedNodes) => {
      if (!node) return;
      visitedNodes.push(node);
      if (!stack.includes(node)) {
        stack.push(node);
      }
      const neighbors = this.getNeioughbors(node);
      console.log("neighbors", neighbors);
      for (let neighbor of neighbors) {
        // console.log("neighbor", neighbor);
        if (!visitedNodes.includes(neighbor.vertex)) {
          traverse(neighbor.vertex, visitedNodes);
        }
      }
    };

    traverse(start, visitedNodes);

    return stack;
  }
}
module.exports = Graph;
