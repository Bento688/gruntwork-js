// =============================
// CALLBACKS (the legacy pattern)
// =============================
// passing a function into another function to be executed when a task finishes.
// Standard Node.js convention: the first parameter of a callback is always the error

function fetchLegacyData(callback) {
  setTimeout(() => {
    const error = null;
    const data = { id: 1, user: "admin" };
    callback(error, data);
  }, 500);
}

fetchLegacyData((err, data) => {
  if (err) {
    console.error("1. Callback Error:", err);
    return;
  }
  console.log("1. Callback Success:", data);
});

// =================================
// 2. PROMISES (ES6 Standard)
// =================================
// An object representing the eventual completion (or failure) of an async operation.
// Has 3 states: Pending, Fulfilled (Resolved), or Rejected.

function fetchPromiseData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false; // Toggle to false to see .catch() block run

      if (success) {
        resolve({ id: 2, user: "editor" });
      } else {
        reject("Database connection timed out.");
      }
    }, 1000);
  });
}

fetchPromiseData()
  .then((data) => console.log("2. Promise Success:", data))
  .catch((error) => console.log("2. Promise Error:", error))
  .finally(() => console.log("2. Promise Settled (runs no matter what)"));

// ==============================================
// ASYNC / AWAIT (Modern Syntactic Sugar)
// ==============================================
// Built directly on top of promises. Fordes asynchronous code to look and read synchronously.
// MUST wrap "await" inside a function declared with "async".

async function handleData() {
  try {
    // The execution pauses on this line until the Promise resolves
    const data = await fetchPromiseData();
    console.log("3. Async/Await Success:", data);
  } catch (err) {
    // A rejected Promise throws an error that is caught here
    console.error("3. Async/Await Error Caught:", err);
  }
}

handleData();

// ======================================
// PROMISE .ALL (parallel execution)
// =====================================
// efficiency rule: if async tasks don't depend on each other, do NOT await them sequentially.
// Fire them all at once and wit for the group to finish.

const task1 = Promise.resolve("Config loaded");
const task2 = new Promise((res) => setTimeout(() => res("UI rendered"), 1500));
const task3 = Promise.resolve("Analytics booted");

async function bootApplication() {
  console.log("4. Booting app in parallel...");

  // Takes an array of promises, returns an array of results in the exact same order.
  // If even ONE promise rejects, the entire Promise.all rejects immediately.
  const results = await Promise.all([task1, task2, task3]);

  console.log("4. Parallel results:", results);
}

bootApplication();
