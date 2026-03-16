// ===============================
// 1. THE BASIC TRY / CATCH / FINALLY
// ===============================

try {
  // code that might blow up
  const result = dangerousOperation();
  console.log("This line will never run if the line above fails");
} catch (error) {
  // Executes ONLY  if an error is thrown in the try block
  console.error("1. Caught an error:", error.message);
} finally {
  // Executes ALWAYS, whether an error occurred or not.
  // Crucial for cleanup (closing files, DB connections, hiding UI loaders)
  console.log("1. Cleanup: This runs no matter what.");
}

function dangerousOperation() {
  return undeclaredVariable;
}

// ============================
// 2. THROWING STANDARD ERRORS
// ============================

function parseData(dataString) {
  if (!dataString) {
    // ALWAYS  throw an Error object, not a raw string, to get a stack trace.
    // Standard built-in types: Error, TypeError, ReferenceError, SyntaxError.
    throw new TypeError("Data string cannot be empty.");
  }
  return JSON.parse(dataString);
}

try {
  parseData("");
} catch (e) {
  console.error("2. Manual Throw Caught:", e.name, "-", e.message);
  // console.log(e.stack); // contains the file and line line number
}

// ==============================
// 3. CUSTOM ERROR CLASSES
// ==============================
// Essential for architectural clarity so you can identify exactly WHAT went wrong.

class DatabaseError extends Error {
  constructor(message, query) {
    super(message); // Calls the parent Error constructor to set up the stack trace
    this.name = "DatabaseError"; // Overrides the default "Error" name
    this.query = query; // Attach custom metadata
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// ===========================================
// 4. ROUTING SPECIFIC ERRORS (instanceof)
// ===========================================

function simulateTransaction(user) {
  if (!user.age) {
    throw new ValidationError("User age is required.");
  }
  if (user.age < 18) {
    throw new DatabaseError(
      "Underage users cannot be saved.",
      "INSERT INTO users...",
    );
  }
  return "Transaction Successful";
}

try {
  simulateTransaction({ name: "Benedict", age: 16 }); // Missing age
} catch (error) {
  // Since JS only has one catch block, we filter the error type here:
  if (error instanceof ValidationError) {
    console.error("4. Validation Failed:", error.message);
    // e.g., Return HTTP 400 Bad Request
  } else if (error instanceof DatabaseError) {
    console.error("4. DB Error on query:", error.query);
    // e.g., Return HTTP 500 Internal Server Error
  } else {
    console.error("4. Unknown System Error:", error);
    throw error; // Re-throw if we don't know how to handle it.
  }
}
