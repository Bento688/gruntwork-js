// =============================
// 1. THE 7 PRIMITIVE DATA TYPES
// =============================

const isString = "Hello";
const isNumber = 42;
const isFloat = 42.42; // Still just a "number" in JS
const isBoolean = true;
const isNull = null; // represents intentional absence of value
const isUndefined = undefined; // uninitialized variable
const isSymbol = Symbol("unique_identifier");
const isBigInt = 9007199254740991n; // notice the 'n' in the end

// ==================================
// 2. THE TYPEOF OPERATOR & ITS BUG
// ==================================

console.log("typeof isString:", typeof isString); // "string"
console.log("typeof isNumber:", typeof isNumber); // "number"
console.log("typeof isUndefined:", typeof isUndefined); // "undefined"

// JS legacy bug
// cannot be fixed without breaking the web
console.log("typeof isNull:", typeof isNull); // output: "object"

// arrays and objects are structural types, both return "object"
console.log("typeof {}:", typeof {}); // "object"
console.log("typeof []:", typeof []); // "object"

// functions are technically objects, but typeof gives them a special return
console.log("typeof function(){}:", typeof function () {}); // "function"

// =======================================
// 3. TRUTHY AND FALSY (Boolean Coercion)
// ======================================
// Rule: everything is truthy except for these 6 specific "falsy" values:

const falsyValues = [
  false,
  0, // (and -0)
  "", // Empty string
  null,
  undefined,
  NaN, // Not-a-Number
];

// if we pass any of those 6 into an if() statement, they coerce to false.
// EVERYTHING ELSE is true. Even empty arrays and objects!
console.log("Boolean([]):", Boolean([])); // true
console.log("Boolean({}):", Boolean({})); // true
console.log("Boolean('false'):", Boolean("false")); // true (it's a non-empty string)

// =======================================
// 4. IMPLICIT COERCION (The Weird Stuff)
// ======================================

// The `+` operator prefers STRINGS. if one side is a string, it concatenates.
console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" + true); // "1true"

// The `-`, `*`, `/` operators prefer NUMBERS. They force strings into numbers.
console.log("5" - 2); // 3 (it coerced "5" to 5)
console.log("5" * "2"); // 10
console.log("5" - "foo"); // NaN (cannot coerce "foo" to a number)

// =======================================
// 5. LOSE (==) VS STRICT (===) EQUALITY
// ======================================

// Loose euality (==) allows coercion before comparing. NEVER use this.
console.log('"1" == 1:', "1" == 1); // true
console.log("true == 1:", true == 1); // true
console.log("null == undefined:", null == undefined); // true

// Strict equality (===) checks value AND type. ALWAYS use this.
console.log('"1" === 1:', "1" === 1); // false
console.log("true === 1:", true === 1); // false
console.log("null === undefined:", null === undefined); // false
