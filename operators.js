//OPERATORS are special symbols or keywords in programming that tell the computer to perform specific actions on values or variables.
let a = 10;
let b = 5;

//ARITHMETIC OPERATORS are used to perform mathematical calculations.
let sum = a + b; //addition
let difference = a - b; //subtraction
let product = a * b; //multiplication
let quotient = a / b; //division
let remainder = a % b; //modulus
let exponentiation = a ** b; //exponentiation

console.log(exponentiation);

//exercise, code that calculates the parameter and the area of a rectangle.
let length = 8;
let width = 3;
let perimeter = 2 * (length + width);
let area = length * width;

//ASSIGNMENT OPERATORS are used to assign and update values to variables.
let c = 15;
let d = 4;

c += 5; //equivalent to c = c + 5
c -= 3; //equivalent to c = c - 3
d *= 2; //equivalent to d = d * 2
d /= 4; //equivalent to d = d / 4

//exercise, Start with x = 100 and use assignment operators to reduce it step by step until it equals 1.
let x = 100;
x /= 2; // x = 50
x *= 5; // x = -25
x += 26; // x = 1

//COMPARISON OPERATORS are used to compare two values and return a boolean result (true or false).
let e = 20;
let f = 30;


console.log("e == '20':", e == '20');       // Equality (values are equal?)
console.log("e === '20':", e === '20');     // Strict equality (values & types are equal?)
console.log("e != f:", e != f);       // Inequality (values are not equal?)
console.log("e !== f:", e !== f);     // Strict inequality (values & types are not equal?)
console.log("e > f:", e > f);         // Greater than
console.log("e < f:", e < f);         // Less than
console.log("e >= f:", e >= f);       // Greater than or equal to
console.log("e <= f:", e <= f);       // Less than or equal to

//LOGICAL OPERATORS are used to combine multiple boolean expressions and return a boolean result. are used to combine or invert conditions. They’re especially handy when working with if statements, loops, or any situation where you need to evaluate multiple conditions at once.

console.log("AND (e < f && f > 10):", e < f && f > 10); // true because both conditions are true
console.log("AND (e > f && f < 10):", e > f && f < 10); //false because both conditions are false
console.log("AND (e < f && f < 10):", e < f && f < 10); //false because one condition is true and the other is false
console.log("OR (e > f || f < 10):", e > f || f < 10);  //false because both conditions are false
console.log("OR (e < f || f > 10):", e < f || f > 10); // true because both conditions are true
console.log("OR (e > f || f > 10):", e > f || f > 10);  // true because one condition is true and the other is false
console.log("NOT (!(e < f)):", !(e < f));               // false since it is a true statement being negated
console.log("NOT (!(e > f)):", !(e > f));               // true since it is a false statement being negated


//STRING OPERATORS are used to perform operations on (texts) string values.

let g = "Hello";
let h = "World";

// Concatenation
console.log(g + " " + h); // "Hello World"

// Concatenation assignment
let i = "Java";
i += "Script";
console.log(i); // "JavaScript"

// Comparison
console.log("cat" === "cat"); // true
console.log("dog" !== "cat"); // true

// Lexicographic comparison is based on the Unicode(the first ) values of characters
console.log("apple" < "banana"); // true because 'a' comes before 'b'
console.log("zebra" > "lion");   // true because 'z' comes after 'l'

//UNARY OPERATORS are operators that operate on a single operand to produce a new value.

//BITWISE OPERATORS are used to perform operations on individual bits of binary numbers.

//TERNARY OPERATOR is a shorthand way of writing shorthand conditional statements, an if-else statement.
