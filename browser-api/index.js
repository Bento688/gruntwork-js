// ======================================
// 1. SELECTING ELEMENTS
// ======================================

// getElementById: Fast, but only works on IDs. Returns a single element.
const title = document.getElementById("main-title");

// querySelector: The modern Swiss Army Knife. Uses CSS selectors
// (.class, #id, tag).
// Returns the first matching element.
const button = document.querySelector(".action-btn");

// querySelectorAll: Returns a NodeList (array-like object) of ALL matching elements.
const allButtons = document.querySelectorAll("button");

// ==============================================
// 2. MUTATING THE DOM (changing content & styles)
// ==============================================

// Change text content safely (ignores HTML tags)
title.textContent = "DOM manipulation ready";

// Change HTML (vulnerable to XSS attacks if using user input)
title.innerHTML = "<span>Dangerously set HTML</span>";

// Mutate CSS classes directly
button.classList.add("primary"); // Adds a class
button.classList.remove("hidden"); // Removes a class
button.classList.toggle("active"); // Adds it if missing, removes it if present.

// ===================================
// 3. EVENT LISTENERS
// ===================================
// The modern way to handle user interaction. Never use inline HTML onclick="".

button.addEventListener("click", (event) => {
  // 'event' contains metadata about the click (coordinates, target element, etc.)
  console.log("button clicked!", event.target);

  // example reaction: Update the UI
  title.style.color = "blue"; // Direct inline style manipulation
});

// ==========================================
// 4. LOCALSTORAGE (browser persistence)
// ==========================================
// Saves data in the browser even after a refresh. ONLY stores strings.

const userSettings = { theme: "dark", volume: 80 };

// WRITING : must convert objects to JSON strings first
localStorage.setItem("settings", JSON.stringify(userSettings));

// READING: Must parse the JSON string back into a JS object
const savedSettingsString = localStorage.getItem("settings");
const parsedSetttings = JSON.parse(savedSettingsString);

console.log("From LocalStorage:", parsedSetttings.theme); // "dark"

// =======================================
// 5. THE FETCH API (Network Requests)
// ======================================
// the built-in browser tool for making HTTP requests (replaces the lagcy XMLHttpRequest).

async function fetchUsers() {
  try {
    // 1. Make the network request
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // 2. Check if the response was successful (HTTP status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 3. Parse the raw response body as JSON
    const users = await response.json();

    // 4. Render the data to the DOM
    const list = document.getElementById("user-list");

    // Clear the list first
    list.innerHTML = "";

    users.slice(0, 3).forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      list.appendChild(listItem);
    });
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

// call the function immediately to load data on page load
fetchUsers();
