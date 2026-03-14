// ===============================================
// 1. DECLARATION, INITIALIZATION & MUTATION
// ===============================================

// const: must be initialized immediately. cannot be reassigned.
const developerName = "Benedict";
// developerName = "Ben", // --> TypeError: Assignment to constant variable

// const objects and arrays CAN be mutated (their properties/elements change).
// The binding is constant, but the value is not frozen.
const config = { environment: "development" };
config.environment = "production"; // --> VALID SYNTAX

// let: can be declared uninitialized. Can be reassigned.
let activeUsers;
activeUsers = 0;
activeUsers = 5; // VALID

// var: Function-scoped, legacy syntax.
var legacySystem = "PHP";
legacySystem = "Legacy JS"; // Valid

// ===============================================
// 2. SCOPE & SHADOWING
// ===============================================

let appState = "running";

if (true) {
  // === Block Scope ===
  let blockLet = "locked in block";
  const blockConst = "locked in block";

  var blockVar = "I leak out of blocks!";

  // === Shadowing ===
  // Re-declaring a variable with the same name in an inner scope
  let appState = "paused";
  console.log("Inner appState: ", appState); // Output: "paused"
}

console.log("Outer appState: ", appState); // Output: "running"

// console.log(blockLet); // ReferenceError
// console.log(blockConst); // ReferenceError
console.log(blockVar); // Output: "I leak out of blocks!"

function scopeTest() {
  // var is strictly function-scoped. It will not leak out of here.
  var functionVar = "contained";
}
// console.log(functionVar); // ReferenceError

// ===============================================
// 3. HOISTING (Syntax Behavior)
// ===============================================

// var is hoisted to the top and initialized with 'undefined'
console.log("Hoisted var:", hoistedVar); // Output: undefined
var hoistedVar = "I exist now";

// let and const are hoisted but NOT initialized (sit in temporal dead zone)
// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "Safe from being read too early.";
