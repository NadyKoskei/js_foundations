// FUNCTIONS are reusable blocks of code that perform a specific task.
// They help organize code, make it more readable, and allow for code reuse without duplication.

// Function DECLARATION is the standard way to define a function.
// It starts with the 'function' keyword, followed by the function name, parentheses for parameters, and curly braces for the function body.
function greet(name) {
    // 'name' is a parameter that acts as a placeholder for the argument passed to the function
    //PARAMETERS are variables listed as part of the function definition.
    // Inside the function, we use the 'name' parameter to customize the greeting message
    //ARGUMENTS are the actual values you pass to the function when you call it.
    console.log("Hello, " + name + "!");
}
// Function CALLING/INVOKING is how you execute a function to perform its task.
greet("Nady"); // Here, "Nady" is the argument passed to the 'greet' function



// Function EXPRESSION is another way to define a function, where the function is assigned to a variable.
const add = function(a, b) {
    // 'a' and 'b' are parameters for the function
    return a + b; // The function returns the sum of 'a' and 'b'
};
let result = add(5, 3); // Calling the 'add' function with arguments 5 and 3
console.log("Sum:", result); // Output the result

// ARROW FUNCTION is a more concise syntax for writing functions, introduced in ES6.
const multiply = (x, y) => {
    // 'x' and 'y' are parameters for the arrow function
    return x * y; // The function returns the product of 'x' and 'y'
};
let product = multiply(4, 6); // Calling the 'multiply' function with arguments 4 and 6
console.log("Product:", product); // Output the product

// If the arrow function has a single expression, you can omit the curly braces and the 'return' keyword for brevity.   
const square = n => n * n; // Single parameter 'n', returns its square
let squaredValue = square(7); // Calling the 'square' function with argument 7
console.log("Squared Value:", squaredValue); // Output the squared value    

// DEFAULT PARAMETERS allow you to set default values for function parameters.
function greetWithDefault(name = "Guest") {
    // If no argument is provided, 'name' will default to "Guest"
    console.log("Welcome, " + name + "!");
}

greetWithDefault(); // Calls the function without an argument, uses default
greetWithDefault("Alice"); // Calls the function with an argument

// RETURN STATEMENT is used to specify the value that a function should output when it is called.
function subtract(a, b) {
    return a - b; // The function returns the difference between 'a' and 'b'
}

let difference = subtract(10, 4); // Calling the 'subtract' function with arguments 10 and 4
console.log("Difference:", difference); // Output the difference

// FUNCTION SCOPE refers to the visibility and lifetime of variables defined within a function.
function scopeExample() {
    let localVar = "I am local"; // 'localVar' is scoped to this function
    console.log(localVar); // Accessible here
}
scopeExample();
// console.log(localVar); // gives an error because localVar is not defined outside the function

// HIGHER-ORDER FUNCTIONS are functions that can take other functions as arguments or return functions as their result.
function higherOrderExample(callback) {
    // 'callback' is a function passed as an argument
    console.log("Before callback");
    callback(); // Calling the callback function
    console.log("After callback");
}
