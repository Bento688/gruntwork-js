// =============================================
// THE LEGACY WAY: CONSTRUCTORS & PROTOTYPES
// ================================================
// before ES6, this was how you built object blueprints

// Legacy way (similar to Go?)
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// attach methods directly to the prototype.
// saves memory because all instances share this single function reference
Vehicle.prototype.start = function () {
  return `${this.year} ${this.make} ${this.model} is starting...`;
};

const myScooter = new Vehicle("Yamaha", "Cygnux X", 2016);
console.log("Legacy Prototype:", myScooter.start());

// =============================================
// ES6 CLASSES (syntactic sugar)
// ================================================
// does the exact same thing as the code above, just formatted cleanly.

class ModernVehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Methods inside the class are automatically attached to the prototype
  start() {
    return `Modern ${this.year} ${this.make} ${this.model} is starting...`;
  }
}

// =============================================
// INHERITANCE (extends & super)
// ================================================

class Scooter extends ModernVehicle {
  constructor(make, model, year, engineCc) {
    // !!! : you MUST call super() before accessing 'this' in a derived class.
    // calling super() calls the parent class's constructor
    super(make, model, year);
    this.engineCc = engineCc;
  }

  rev() {
    return `${this.make} revs its ${this.engineCc} engine!`;
  }
}

const dailyCommuter = new Scooter("Yamaha", "BWS R", "2015", 124);
console.log("Inherited method:", dailyCommuter.start());
console.log("Child method:", dailyCommuter.rev());

// =================================
// STATIC METHODS & PROPERTIES
// =================================
// Static items belong to the class itself, not the individual instances

class MathUtil {
  static PI = 3.14159;

  static add(x, y) {
    return x + y;
  }
}

console.log("Static property:", MathUtil.PI); // valid
console.log("Static method", MathUtil.add(10, 5)); // valid

// const math = new MathUtil(); // Static items BELONG TO the CLASS ITSELF, NOT the INDIVIDUAL INSTANCES
// console.log(math.add(1, 2)); // typeerror: math.add is not a function

// ===============================
// PRIVATE FIELDS & METHODS
// ===============================
// Prefix with '#' to make them strictly private. They cannot be accessed from the outside.

class BankAccount {
  #balance = 0; // Private property declaration

  deposit(amount) {
    this.#balance += amount;
    return `Deposited ${amount}.`;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance());
// console.log(account.#balance); // property #balance is not accessible outside the class.

// ======================================
// DYNAMIC PROTOTYPE MUTATION (JS vs Go)
// ======================================

function StructLikeUser(name) {
  this.name = name;
}

const userOne = new StructLikeUser("Alice");
const userTwo = new StructLikeUser("Bob");

// At this point, neither users has the sayHi method.
// In Go, the struct defintion is locked. In JS, we can inject it at runtime.

StructLikeUser.prototype.sayHi = function () {
  return `Hi, I am ${this.name}`;
};

// Even though userOne and userTwo were created BEFORE  sayHi existed,
// they can now use it because they delegate up to the modified prototype.
console.log("Delegated Method:", userOne.sayHi());
console.log("Delegated Method:", userTwo.sayHi());
