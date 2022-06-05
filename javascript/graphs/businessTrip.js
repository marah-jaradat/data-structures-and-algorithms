"use strict";

function businessTrip(graph, arrCity) {
  let cost = 0;
  let check = false;
  for (let i = 0; i <= arrCity.length - 1; i++) {
    let neighbors = graph.getNeioughbors(arrCity[i]);
    for (let j = 0; j <= neighbors.length - 1; j++) {
      if (arrCity[i + 1] === neighbors[j].vertex) {
        cost += neighbors[j].weight;
        check = true;
      }
    }
    if (check === false) {
      cost = 0;
      check = false;
      return "null";
    }
  }

  return `$${cost}`;
}

module.exports = businessTrip;
