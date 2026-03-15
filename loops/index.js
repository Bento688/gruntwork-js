// ========================
// standard for loop
// ========================
// syntax : (initialization; condition; afterthought)

for (let i = 0; i < 10; i++) {
  console.log("Standard for:", i);
}

// ========================
// 2. while & do while
// ========================

let count = 0;
while (count < 5) {
  console.log("While", count);
  count++;
}

let doCount = 5;
do {
  console.log("Do while loop:", doCount);
} while (count < 5);

// ========================
// 3. for ... of ...
// ========================
// iterate over VALUES

const stack = ["Next.js", "React", "Typescript"];
for (const tech of stack) {
  console.log("for ... of array:", tech);
}

const word = "JS";
for (const char of word) {
  console.log("for ... of string:", char);
}

// ========================
// 4. for ... in ...
// ========================
// !!! USE FOR OBJECTS
// iterate over KEYS/PROPERTIES
// avoid using for arrays
// (iterates through the indexes as strings)

const userConfig = { theme: "Dark", notifications: true };

for (const key in userConfig) {
  console.log(`for ... in Object -> Key: ${key}, Value: ${userConfig[key]}`);
}

// ===================================
// 5.loop control (break & continue)
// ===================================

for (let i = 0; i < 5; i++) {
  if (i === 1) {
    console.log("Skip 1");
    continue; // skips the remaining of the loop body for this iteration only
  }

  if (i === 3) {
    console.log("Breaking at 3");
    break; // kills the loop entirely
  }

  console.log("Loop Control:", i);
}
