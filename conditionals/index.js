// =======================================
// 1. STANDARD IF / ELSE IF / ELSE
// =======================================

const statusCode = 404;

if (statusCode === 200) {
  console.log("OK");
} else if (statusCode === 400 || statusCode === 404) {
  // Uses || (OR) operator. Only one side needs to be truthy.
  console.log("Client Error");
} else {
  console.log("Unknown Status");
}

// ==============================
// 2. TERNARY OPERATOR (? :)
// ==============================

// Syntax: condition ? exprIfTrue : exprIfFalse
// Great for one-liners and assigning variables based on a condition.

const isAuthenticated = true;
const accessLevel = isAuthenticated ? "Admin" : "Guest";
console.log("Access:", accessLevel);

// You CAN chain ternaries (though it gets ugly fast, you will see it in the wild):
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log("Grade:", grade);

// ==========================================
// 3. SWITCH STATEMENTS & FALL-THROUGH
// ==========================================
// Switch uses STRICT equality (===) under the hood.

const userRole = "editor";

switch (userRole) {
  case "admin":
    console.log("Full Access");
    break; // CRITICAL: Without 'break', JS will execute the next case too!
  case "editor":
  case "author": // intentionally omitted break to "fall-through" to the same logic
    console.log("Write Access");
    break;
  case "viewer":
    console.log("Read Only");
    break;
  default: // Runs if no cases match
    console.log("No Access");
}

// ==========================================
// 4. SHORT-CIRCUIT EVALUATION (&&, ||)
// ==========================================
// JS developers use these as inline conditionals all the time.

const isLoggedIn = true;
const userName = "Benedict";

// AND (&&): If the left side is truthy, it returns the right side.
// Often used used in React to conditionally render components.
isLoggedIn && console.log("Welcome back," + userName);

// OR (||): If the left side is falsy, it returns the right side.
// Historically usd to set default values.
const userInput = ""; // Empty string is falsy!
const defaultName = userInput || "Anonymous";
console.log("|| Default:", defaultName); // Output: "Anonymous"

const validUserInput = "Alice"; // Non-empty string is truthy
const activeName = validUserInput || "Anonymous";

console.log("Truth-side ||:", activeName);

// ==========================================
// 5. NULLISH COALESCING OPERATOR (??)
// ==========================================
// The modern fix for the '||' operator.
// ?? ONLY checks for the 'null' or 'undefined'. It treats 0, "", and false as valid values.

const count = 0; // 0 is falsy, but it's a vaid number we might want to keep!

// Using || accidentally overwrites our valid 0:
console.log("Count with ||:", count || 10); // Output : 10 (Bug!)

// Using ?? preserves our valid 0:
console.log("Count with ??", count ?? 10); // Output: 0 (Correct!)
