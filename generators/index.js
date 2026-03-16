// ===================================
// 1. THE GENERATOR SYNTAX
// ===================================

// the asterisk (*) indicates a generator, not a normal function
function* numberGenerator() {
  console.log("Execution started");

  yield 1; // pauses here and returns 1
  console.log("Execution resumed...");

  yield 2; // pauses here and returns 2
  console.log("Execution almost done...");

  return 3; // Ends the function completely
}

// calling the function does NOT run the code yet.
// it returns an "Iterator" object that controls the execution.
const iterator = numberGenerator();

// =======================================
// 2. STEPPING THROUGH WITH .next()
// =======================================
// .next() returns an object { value: Any, done: Boolean }

console.log("First step:", iterator.next());
// Output: Execution started...
// Output: First step: { value: 1, done: false }

console.log("Second step:", iterator.next());
// Output: Execution resumed...
// Output: Second step: { value: 2, done: false }

console.log("Third step:", iterator.next());
// Output: Execution almost done...
// Output: { value: 3, done: true } ('done' is now true)

// =====================================
// 3. THE INFINITE LOOP USE CASE
// =====================================

// Because 'yield' pauses execution, you can write infinite loops
// inside generators WITHOUT crashing the program.

function* createIdGenerator() {
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

const generateId = createIdGenerator();

console.log("New ID", generateId.next().value); // 1
console.log("New ID", generateId.next().value); // 2
console.log("New ID", generateId.next().value); // 3

// =====================================
// 4. PASSING DATA BACK INTO YIELD
// =====================================

// We can pass values back INTO the function when we resume it.

function* conversation() {
  const name = yield "What is your name?";
  yield `Hello, ${name}`;
}

const chat = conversation();

console.log(chat.next().value); // "What is your name?"
console.log(chat.next("Benedict").value); // Passes "Benedict" into the 'name' variable, outputs "Hello, Benedict!"
