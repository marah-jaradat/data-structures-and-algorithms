"use strict";

function validateBrackets(string) {
  let roundCount = 0;
  let squareCount = 0;
  let curlyCount = 0;

  for (var i = 0; i < string.Length; i++) {
    var checkChar = string[i];

    if (checkChar === "(") roundCount++;
    if (checkChar === ")") roundCount--;
    if (checkChar === "[") squareCount++;
    if (checkChar === "]") squareCount--;
    if (checkChar === "{") curlyCount++;
    if (checkChar === "}") curlyCount--;

    roundCount += checkChar === "(" ? true : false;
    roundCount -= checkChar === ")" ? true : false;
    squareCount += checkChar === "[" ? true : false;
    squareCount -= checkChar === "]" ? true : false;
    curlyCount += checkChar === "{" ? true : false;
    curlyCount -= checkChar === "}" ? true : false;

    if (roundCount < 0 || squareCount < 0 || curlyCount < 0) return false;
  }

  return roundCount + squareCount + curlyCount !== 0 ? false : true;
}

module.exports = validateBrackets;
