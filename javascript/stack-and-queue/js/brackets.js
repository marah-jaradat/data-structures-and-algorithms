"use strict";

const stack = require("./stack");

const validateBrackets = function (string) {
  const newStack = new stack();
  for (let value of string) {
    if (value === "(" || value === "{" || value === "[") {
      newStack.pushItem(value);
    }
    if (value === ")" || value === "}" || value === "]") {
      if (newStack.length === 0) {
        return false;
      }
      newStack.popItem();
    }
  }
  return newStack.length === 0;
};

// for (var i = 0; i < string.Length; i++) {
//   var checkChar = string[i];

//   if (checkChar === "(") roundCount++;
//   if (checkChar === ")") roundCount--;
//   if (checkChar === "[") squareCount++;
//   if (checkChar === "]") squareCount--;
//   if (checkChar === "{") curlyCount++;
//   if (checkChar === "}") curlyCount--;

//   roundCount += checkChar === "(" ? true : false;
//   roundCount -= checkChar === ")" ? true : false;
//   squareCount += checkChar === "[" ? true : false;
//   squareCount -= checkChar === "]" ? true : false;
//   curlyCount += checkChar === "{" ? true : false;
//   curlyCount -= checkChar === "}" ? true : false;

//   if (roundCount < 0 || squareCount < 0 || curlyCount < 0) return false;
// }

// return roundCount + squareCount + curlyCount !== 0 ? false : true;
// }

module.exports = validateBrackets;
