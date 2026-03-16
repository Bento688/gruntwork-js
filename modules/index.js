// ============================
// IMPORTING ES MODULES
// ============================

// 1. Importing a default export
// - can name this anything we want, because it is the default;
import DBConnector from "./utils.js";

// 2. Importing named exports (must match the exact names, requires curly braces)
import { API_URL, connectDB } from "./utils.js";

// 3. Aliasing named exports (using 'as')
// Useful if there are naming conflicts in the file
import { closeDB as shutdownDatabase } from "./utils.js";

// 4. Namespace Import (wildcard)
// Grabs everything exported from the file and bundles it into one object.
import * as Utils from "./utils.js";

console.log("Default:", new DBConnector().status);
console.log("Named:", API_URL);
connectDB();
shutdownDatabase();
console.log("Namespace (Wildcard):", Utils.API_URL);
