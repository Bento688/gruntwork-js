// ==========================
// LEGACY EXPORT
// ==========================

const API_KEY = "12345";
const hashPassword = (pw) => `hashed-${pw}`;

// Everything is assigned to a single 'module.exports' object;
module.exports = {
  API_KEY,
  hashPassword,
};
