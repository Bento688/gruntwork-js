// EXPORTS

// ======================
// NAMED EXPORTS
// ======================

// 1. inline named exports
export const API_URL = "https://api.example.com";

// 2. grouped named exports
// often cleaner at the bottom of a file)
const connectDB = () => console.log("Database connected.");
const closeDB = () => console.log("Database closed.");

export { connectDB, closeDB };

// ====================
// DEFAULT EXPORT
// ====================

class DatabaseConnector {
  constructor() {
    this.status = "initialized";
  }
}

// 3. There can only be ONE default export per file.
export default DatabaseConnector;
