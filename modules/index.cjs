// ============================
// LEGACY IMPORTS
// ============================

// 'require' is just a function that reads the file and returns the module.exports object.
// we can use standard object destructuring here.

const { API_KEY, hashPassword } = require("./utils.cjs");

console.log(hashPassword("password134"));
