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