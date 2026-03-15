// ========================
// CREATION & BASIC MUTATION
// ========================

const stack = ["HTML", "CSS"];

// add/remove from END (fast operation)
stack.push("JS"); // Adds to the end ["HTML", "CSS", "JS"]
const lastItem = stack.pop(); // Removes and returns "JS"

// add/remove from START (slow, forced all other elements to shift indexes)
stack.unshift("Node"); // Adds to the start: ["Node", "HTML", "CSS", "JS"]
const firstItem = stack.shift(); // Removes and returns "Node"

// =====================================
// SLICE VS SPLICE (The classic mix-up)
// =====================================

const letters = ["a", "b", "c", "d", "e"];

// SLICE: returns a shallow copy of the original array. DOES NOT mutate original.
// Syntax: slice(startIndex, endIndexNotIncluded)
const sliceResult = letters.slice(1, 4);
console.log("Slice result:", sliceResult);
console.log("Original intact:", letters);

// SPLICE: Changes the contents by removing or replacing existing elements. MUTATES original.
// Syntax: splice(startIndex, deleteCount, item1, item2, ...)
const spliceResult = letters.splice("2", "2", "X", "Y");
console.log("Splice result:", spliceResult);
console.log("Original mutated:", letters);

// ========================
// DESTRUCTURING & SPREAD
// ========================

const coordinates = [10, 20, 30, 40];

// Array destructuring is strictly based on POSITION (unlike objects, which use keys)
const [x, y, ...restCoords] = coordinates; // rest (...) syntax to get the remaining items as a new array
console.log("Destructured:", x, y);
console.log("Rest(...)", restCoords);

// SPREAD (...) operator to copy or merge
const clonedCoords = [...coordinates];
const mergedArray = [0, ...coordinates, 50];

// ========================
// HIGHER-ORDER METHODS
// ========================

const numbers = [1, 2, 3, 4, 5];

// MAP: Transforms every element and returns a NEW array of the exact same length.
const doubled = numbers.map((n) => n * 2);
console.log("Map (doubled):", doubled);

// FILTER: Returns a NEW array containing only elements that return true.
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Filter (evens):", evens);

// REDUCE: accumulates array values into a single value
// Syntax: reduce((accumulator, currentValue) => newAccumulator, initialValue);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce (sum):", sum);

// FIND & FINDINDEX: Returns the FIRST element (or index) that matches, then stops.
const firstOverTwo = numbers.find((num) => num > 2);
const firstOverTwoIndex = numbers.findIndex((num) => num > 2);
console.log("find (first over two)", firstOverTwo); // 3
console.log("findIndex (first over two index)", firstOverTwoIndex);

// SOME & EVERY: Return true/false booleans based on the array's contents.
const hasNegatives = numbers.some((num) => num < 0); // false
console.log("Some (has negatives):", hasNegatives);
const allPositive = numbers.every((num) => num > 0); // true
console.log("Every (all positives):", allPositive);

// ============================
// CHAINING METHODS
// ============================
// Because map and filter return arrays, we can chain them directly

const chainedResult = numbers
  .filter((n) => n > 2) // returns [3, 4, 5]
  .map((n) => n * 10) // returns [30, 40, 50]
  .reduce((acc, val) => acc + val, 0); // returns 120

console.log("Chaining methods:", chainedResult);
