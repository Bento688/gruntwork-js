// =================================
// 1. FUNCTION DECLARATION (HOISTED)
// =================================
// declarations are hoisted to the top
// we can call them before it is defined

console.log(greet("Alice"));

function greet(name) {
  return `Hello, ${name}`;
}

// =================================
// 2. FUNCTION EXPRESSIONS (NOT HOISED)
// =================================
// assigned to a variable, stays in the temporal dead zone until initialized

// console.log(sayGoodbye("bob")); // invalid (not initialized yet)

const sayGoodbye = function (name) {
  return `Goodbye, ${name}`;
};

console.log(sayGoodbye("bob")); // valid here

// =======================================
// 3. ARROW FUNCTIONS (modern, lexical 'this');
// =======================================
// arrow functions do not have their own 'this' context;
// they inherit it from ist surrounding scope.

// standard arrow function
const add = (a, b) => {
  return a + b;
};

// implicit return (if it is a single expression, we can
// drop the {} and the return keyword)
const multiply = (a, b) => a * b;

// single parameter (we can even remove the () of the parameters,
// but prettier often puts it back again)
const square = (x) => x * x;

// returning an object implicitly
// MUST wrap the object in parentheses => so JS doesn't confuse the {} with a function block
const getUser = (id) => ({ id: id, name: "user" });

console.log("Implicit return: ", square(5));
console.log("Object return: ", getUser(1));

// ====================================
// 4. DEFAULT AND REST PARAMETERS
// ====================================

// default parameters (set a fallback if an argument is undefined)
function rollDice(sides = 6) {
  return Math.floor(Math.random() * sides) + 1;
}
console.log("Default param: ", rollDice());

// rest parameters (...): gathers all remaining arguments into an array
// MUST be the last parameter in the function definition
function buildTeam(leader, ...members) {
  console.log("leader: ", leader);
  console.log("members: ", members);
}
buildTeam("Alice", "Bob", "Charlie", "Dominique");

// ===================================================
// IIFE (Immediately Invoked Function Expression)
// ==================================================
// Legacy pattern still heavily used in
// libraries to avoid polluting the global scope
// => RUNS THE EXACT MOMENT IT IS DEFINED

(function () {
  const privateVar = "I am trapped inside the IIFE";
  console.log("IIFE executed right away");
})();
// console.log(privateVar); // reference error
