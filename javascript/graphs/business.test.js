"use strict";

const businessTrip = require("./businessTrip");
const Graph = require("./graph");

describe("test graph-business-trip", () => {
  const graph = new Graph();

  graph.addNode("Pandora");
  graph.addNode("Arendelle");
  graph.addNode("Narnia");
  graph.addNode("Naboo");
  graph.addNode("Metroville");
  graph.addNode("Monstroplolis");

  graph.addEdge("Pandora", "Arendelle", 150);
  graph.addEdge("Metroville", "Pandora", 82);
  graph.addEdge("Arendelle", "Monstroplolis", 42);
  graph.addEdge("Monstroplolis", "Naboo", 73);
  graph.addEdge("Narnia", "Naboo", 250);
  it("check if Narnia and Naboo business trip = 250", () => {
    expect(businessTrip(graph, ["Narnia", "Naboo"])).toEqual("$250");
  });
  it("check to return null when there is no trip", () => {
    expect(businessTrip(graph, ["Naboo", "Arendelle"])).toEqual("null");
  });
  it("check if return null when there is no trip btween more than two cities", () => {
    expect(businessTrip(graph, ["Narnia", "Metroville", "Naboo"])).toEqual(
      "null"
    );
  });
});
