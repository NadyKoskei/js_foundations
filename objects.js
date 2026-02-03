//generally, everything in JavaScript is an OBJECT, which is a collection of properties and methods that represent real-world entities or concepts. Objects can be created using object literals, constructor functions, or classes, and they allow us to organize and structure our code in a more modular and reusable way.

//OBJECTS are used to store related data and functionality together in a structured way.
// They consist of key-value pairs, where KEYs are strings (or Symbols) and values can be any data type, including other objects or functions.
//PROPERTY is a key-value pair in an object. The key is the name of the property, and the value is the data associated with that key.

let person = {
    // 'name' is a key, and 'Alice' is its corresponding value
    name: "Alice",
    age: 30,
    // 'greet' is a key, and the value is a function (method) that can be called on the object
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

//to access an item (property) within an object you can use the DOT NOTATION where the syntax is: 
// objectName.propertyName     this will return the value associated with that property.

console.log("Person's name:", person.name); //accessing the 'name' property

//or you can use the BRACKET NOTATION where the syntax is:
// objectName["propertyName"]   this will also return the value associated with that property.

console.log("Person's age:", person["age"]); //accessing the 'age' property

//to call a method (function) within an object, you use the DOT NOTATION followed by parentheses () to execute the function.

person.greet(); //calling the 'greet' method