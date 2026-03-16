// =======================================
// BUILT-IN STATIC VS INSTANCE METHODS
// =======================================

// STATIC: called directly on the Constructor.
// It does not need an instance to exist.
const currentTimeStamp = Date.now();
console.log("Static Method:", currentTimeStamp);

// INSTANCE: Called on the instantiated object.
// It relies on the prototype chain.
const myDate = new Date();
const currentYear = myDate.getFullYear();
console.log("Instance Method (Prototype):", currentYear);

// console.log(myDate.now()); // TypeError: myDate.now is not a function

// ================================================
// RECREATING THE Object global architecture
// ================================================

function CustomObject() {
  // constructor logic would go here.
}

// attach to PROTOTYPE = InstanceMethod (shared across all instances)
CustomObject.prototype.instanceMethod = function () {
  return "I am shared across all instances via the prototype chain.";
};

// attach directly to the CONSTRUCTOR = Static Method
CustomObject.staticAssign = function (target, source) {
  return { ...target, ...source };
};

// === testing the architecture ===

const obj1 = { a: 1 };
const obj2 = { b: 2 };

// using out static method (no instances required)
const merged = CustomObject.staticAssign(obj1, obj2);
console.log("Static Call:", merged);

const instance = new CustomObject();

// instance can access the prototype method:
console.log("Instance Call:", instance.instanceMethod());

// but the instance has ZERO knowledge of the static method.
// console.log(instance.staticAssign(obj1, obj2)); // TypeError
