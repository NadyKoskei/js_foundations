//VARIABLES are used to store data values that can be referenced and manipulated in a program.

//const is used to declare variables that cannot be reassigned, while let is used for variables that can be reassigned later.

//var is an older way to declare variables and is generally avoided in modern JavaScript due to its function scope and hoisting behavior.

//let is used to declare variables that can be reassigned later.

let age; //DECLARATION ..the key word and the name of the variable 
age = 20; //assignment

const Name = "Nady"; 
//INITIALIZATION is declaration and assignment at the same time

console.log("i am " + age + " years old.");
//CONCATENATION is using the + operator to combine/join strings and variables together.

//age = age + 10; 
age += 10; //shorthand for the same operation
//REASSIGNMENT is updating the variable age by adding 10 to its current value
console.log("in 10 years, I will be " + age + " years old");

let sistersAge = `my sister who is one year older than me will be ${age + 1} years old`;
console.log(sistersAge);
//STRING INTERPOLATION is embedding variables or expressions directly inside a string, replacing placeholders with their values.
//The backticks (`...`)  create a TEMPLATE LITERAL (a special kind of string in JavaScript).
//Inside the template literal, anything wrapped in ${...} is evaluated as JavaScript code before being inserted into the string.
//In this case, ${age + 1} calculates the sister's age by adding 1 to the current value of age.


//STRING METHODS are built-in functions that allow you to manipulate and work with string data more easily.
let str = "  JavaScript is fun!  ";

console.log(str.trim());              // "JavaScript is fun!" 
console.log(str.toUpperCase());       // "  JAVASCRIPT IS FUN!  "
console.log(str.includes("fun"));     // true
console.log(str.slice(2, 12));        // "JavaScript"
console.log(str.replace("fun", "cool")); // "  JavaScript is cool!  "