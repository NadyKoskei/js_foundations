// FUNCTIONS are reusable blocks of code that perform a specific task.
// BLOCK OF CODE is a group of statements that are treated as a single unit.
// In most programming languages, blocks are enclosed in curly braces { } or indentation.
// They define the scope of execution — for example, inside functions, loops, or conditionals.
// They help organize code, make it more readable, and allow for code reuse without duplication.
// REUSABILITY means that once a function is defined, it can be used multiple times throughout the code without needing to rewrite it each time.

// Function DECLARATION is the standard way to DEFINE a function. 
// NB code  inside a function willl not be executed untill it is called.
// It starts with the 'function' keyword, followed by the function name, parentheses for parameters, and curly braces for the function body.

// RETURN STATEMENT is used to specify the value that a function should output when it is called , allows us to store the output in a variable or use it in expressions.
//Inside a function, return sends a value back to the place where the function was called.
//note that return does not print to the console directly. You need to use console.log to see the output.

function greet(name) {
    // 'name' is a parameter that acts as a placeholder for the argument passed to the function
    //PARAMETERS are variables listed as part of the function definition.
    // Inside the function, we use the 'name' parameter to CUSTOMIZE the greeting message
    //ARGUMENTS are the actual values you pass to the function when you call it. they are assigned to the corresponding parameters in order.
    console.log("Hello, " + name + "!");
}
// Function CALLING/INVOKING is how you execute a function to perform its task.
greet("Nady"); // Here, "Nady" is the argument passed to the 'greet' function


callme(); //calling the function before its declaration due to hoisting

// HOISTING is a JavaScript mechanism where function declarations are moved to the top of their containing scope during the compilation phase.
//its like declarations are read first before any code is executed.
// This means you can call functions before they are defined in the code.

function callme() {
    console.log("I am called before my declaration because of hoisting");
}

//IIFE is a function that runs immediately after it’s defined. Immediately Invoked Function Expression
// It’s wrapped in parentheses to make it an expression, then followed by () to execute.
(function() {
  console.log("I run instantly!");
})();

// Function EXPRESSION is another way to define a function, where the function is assigned to a variable.
const add = function(a, b) {
    // 'a' and 'b' are parameters for the function
    return a + b; // The function returns the sum of 'a' and 'b'
};
let result = add(5, 3); // Calling the 'add' function with arguments 5 and 3
console.log("Sum:", result); // Output the result

//NB there is a difference between expression and calling a function as part of value assignment to a variable.
// In a function expression, the function is defined and assigned to a variable, but it is not executed until you call it using parentheses () with arguments.
//in line 48, the variable result stores the output of calling the add function with 5 and 3 as arguments.
//in line 44, the variable add holds the function itself, not the result of calling it.

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

//CALLBACK FUNCTION is a function passed into another function as an argument to be executed later.
function myCallback() {
    console.log("I am a callback function!");
}


// HIGHER-ORDER FUNCTIONS are functions that can take other functions as arguments or return functions as their result.
function higherOrderExample(myCallback) {
    // 'myCallback' is a function passed as an argument
    console.log("Before callback");
    myCallback(); // Calling the callback function
    console.log("After callback");
}

higherOrderExample(myCallback); // Passing 'myCallback' as an argument

// RECURSION is a programming technique where a function calls itself to solve a problem.

