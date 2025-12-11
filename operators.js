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


console.log("e == '20':", e == '20');       // Loose equality (values are equal?)
console.log("e(20) === '20':", e === '20');     // Strict equality (values & types are equal?)
console.log("z == 7", "z" == 7);        
//Whenever a non-numeric string is compared to a number with ==, the string is converted to a number and becomes NaN (which is a special type of number), and the comparison will always be false.
console.log("e != f:", e != f);       // Inequality (values are not equal?)
console.log("e !== f:", e !== f);     // Strict inequality (values & types are not equal?)
console.log("", "10" != 10);       
console.log("", "10" != 10);
console.log("e > f:", e > f);         // Greater than
console.log("e < f:", e < f);         // Less than
console.log("e >= f:", e >= f);       // Greater than or equal to
console.log("e <= f:", e <= f);       // Less than or equal to

//LOGICAL OPERATORS are used to combine multiple boolean expressions and return a boolean result. are used to combine or invert conditions. They’re especially handy when working with if statements, loops, or any situation where you need to evaluate multiple conditions at once.

//- &&, double amperstand → returns the first falsy value, or the last truthy if none are falsy, all are truthy.
//- ||, double pipe → returns the first truthy value, or the last falsy if none are truthy, all are falsy.
//- !, esclamation mark  → negates a boolean value (true becomes false, false becomes true) converts a value into its boolean opposite.

//FALSEY values in js include: false, 0 and -0 and 0n (BigInt zero), "" empty string, null, undefined, and NaN. All other values are considered TRUTHY.

console.log("AND (e < f && f > 10):", e < f && f > 10); // true because both conditions are true
console.log("AND (e > f && f < 10):", e > f && f < 10); //false because both conditions are false
console.log("AND (e < f && f < 10):", e < f && f < 10); //false because one condition is true and the other is false
console.log("OR (e > f || f < 10):", e > f || f < 10);  //false because both conditions are false
console.log("OR (e < f || f > 10):", e < f || f > 10); // true because both conditions are true
console.log("OR (e > f || f > 10):", e > f || f > 10);  // true because one condition is true and the other is false
console.log("NOT (!(e < f)):", !(e < f));               // false since it is a true statement being negated
console.log("NOT (!(e > f)):", !(e > f));               // true since it is a false statement being negated


//exercise on logical operators
console.log("" && "hello"); //returns an empty string "" because it is the first falsy value to be encountered
console.log("" || "hello"); //returns "hello" because it is the first truthy value to be encountered
console.log(0 || 7); //returns 7 because it is the first truthy value to be encountered
console.log("hey there" && "false" && true); //returns true because none of the values are falsy, so it returns the last truthy value
console.log(0 || "" || null || "false"); //returns "false" because it is the first truthy value to be encountered

//homework with logical operators
let age =10;
console.log(age >= 18 && age <= 35); //returns false, age>=18 because it is the first falsely value to be encountered
console.log(age < 20 || age > 60); //returns true,age<20 because it is the first truthy value to be encountered
console.log(age < 18 && "you are a child"); //returns "you are a child" because it is the last truthy value to be encountered
console.log(age >= 18 && "you are an adult"); //returns false,age>=18 because it is the first falsely value to be encountered
console.log(age >= 18 && age <= 35 && "you are among the youth"); //returns false, age>=18 because it is the first falsely value to be encountered
console.log((age >= 18 && age <= 35) || "you are not a youth"); //returns "you are not a youth" because it is the first truthy value to be encountered

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
