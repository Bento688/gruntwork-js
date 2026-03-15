// ==========================
// 1. CREATION & ACCESS
// ==========================

const user = {
  firstName: "benedict",
  age: 22,
  "kebab-key-case": "Must use quotes for invalid identifier names",
  greet() {
    // ES6 method shorthand: no need for greet: function()
    return `Hi, I am ${this.firstName}`;
  },
};

// dot notation
console.log(user.firstName);

// bracket notation
console.log(user["kebab-key-case"]);

// dynamic key
const dynamicKey = "age";
console.log(user[dynamicKey]); // outputs 22

console.log(user.greet());

// =======================
// 2. BASIC DESTRUCTURING
// =======================
// extract properties from an object and binds them to variables of the same name

const config = { host: "localhost", port: 8080, secure: true };
const { host, port } = config;
console.log("Destructured: ", host, port); // "localhost", 8080

// ==========================================
// 3. DESTRUCTURING: RENAMING & DEFAULTS
// =========================================

const apiResponse = { data: "success", code: 200 };

// renaming variables during destrucuting (Syntax: originalName: newName)
const { data: responseBody, code: statusCode } = apiResponse;
console.log("Renamed: ", responseBody, statusCode); // "success" 200

// default values (used if the property is strictly `undefined`, if the property doesn't exist)
const settings = { theme: "dark" };
const { theme, notifications = true } = settings;
console.log("Defaults: ", theme, notifications); // "dark" true

// combining renaming and Defaults
const { layout: uiLayout = "grid" } = settings;
console.log("Renamed + Default: ", uiLayout); // "grid"

// ==========================================
// 4. NESTED DESTRUCTURING
// =========================================

const profile = {
  id: 1,
  socials: {
    twitter: "@ben",
    github: "ben-dev",
  },
};

const {
  socials: { github: ghUsername },
} = profile;
console.log("Nested Github:", ghUsername);
// console.log(socials); // referenceError (socials is not defined, only github was extracted)

// ==========================================
// 5. REST (...) & SPREAD (...) OPERATOR
// ==========================================

// REST: gathers remaining properties INTO A NEW OBJECT during destructuring
const player = { username: "ben", score: 100, level: 5, rank: "A" };
const { username, ...stats } = player;
console.log("Rest Object:", stats); // {score: 100, level: 5, rank: 'A'}

// SPREAD: unpacks properties into a new object (great for merging and cloning)
const baseConfig = { env: "dev", debug: true };
const mergedConfig = { ...baseConfig, debug: false, newProp: "added" };
console.log("Spread merge:", mergedConfig);

// ==========================================
// 6. OPTIONAL CHAINING (?.) & OBJECT METHODS
// ==========================================

// prevents "Cannot read properties of undefined" errors.

const deepNested = { user: { address: null } };

// if 'address' or 'zipCode' is null/undeefined, it short-circuits and returns undefined instead of crashing.
console.log("Optional chaining:", deepNested.user?.address?.zipCode); // undefined

// Handy object methods:
const colors = { red: "#f00", blue: "#00f" };

console.log("Keys:", Object.keys(colors));
console.log("Values:", Object.values(colors));
console.log("Entries:", Object.entries(colors));
