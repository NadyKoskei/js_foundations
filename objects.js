//OBJECTS are used to store related data and functionality together in a structured way.
// They consist of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including other objects or functions.
let person = {
    // 'name' is a key, and 'Alice' is its corresponding value
    name: "Alice",
    age: 30,
    // 'greet' is a key, and the value is a function (method) that can be called on the object
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

