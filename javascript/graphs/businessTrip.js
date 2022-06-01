"use strict";

// const businessTrip = (graph, arrCityNames) => {
//   let cost = 0;
//   for (let i = 0; i < arrCityNames.length - 1; i++) {
//     let neighborsNode = graph.getNeighbors(arrCityNames[i]);
//     for (let j = 0; j <= neighborsNode.length - 1; j++) {
//       if (arrCityNames[i + 1] === neighborsNode[j].vertex) {
//         cost += neighborsNode[j].weight;
//       }
//     }
//     if (cost === 0) {
//       return `null`;
//     }
//   }
//   return `$ ${cost}`;
// };

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
