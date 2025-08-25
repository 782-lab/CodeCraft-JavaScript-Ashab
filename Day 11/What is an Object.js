/*An object is a collection of key-value pairs.

Keys are called properties.

Values can be anything: number, string, array, function, or another object. */

const student = {
  name: "Ashab",
  age: 21,
  isStudent: true
};

console.log(student.name);  // Output: Ashab
console.log(student["age"]); // Output: 21


Adding & Updating Properties

// Methods (Functions inside Objects)

 const person = {
  name: "Ashab",
  greet: function() {
    return "Hello, " + this.name;
  }
};

console.log(person.greet()); // Output: Hello, Ashab
