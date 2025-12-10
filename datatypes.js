// DATA TYPE - is an attribute of data that specifies:
// What kind of value it represents (number, text, etc.).
// What operations can be performed on it.

//variables - containers where data is stored
//you declare them ... there is the variable name and the assigned value

let age = 60; 
// number
//big ints are used for very large integers beyond the safe integer limit for numbers
let bigIntNum = 9007199254741991n; 
// bigInt
let salary = 4500.50; 
// floating-point number
let uniqueId = Symbol('id');
//symbols are unique and immutable data types used as identifiers for object properties
let fullname = "nady"; 
// string - series of alphanumeric characters enclosed in single '' or double "" quotes and backticks ``
const isStudent = true; 
// boolean
let address; 
// undefined - a variable that has been declared but not assigned a value
let phoneNumber = null; 
// null - represents the intentional absence of any object value

//PRIMITIVE are indivisible — you can’t break them down further in the language, hold single, simple values.



//COMPOSITE,COMPLEX or NON-PRIMITIVE data types can hold multiple values or more complex structures.

let hobbies = ["reading", "gaming", "coding"]; // array

//the console.log prints messages to the browser’s developer console (press F12 → Console tab).
console.log("Your hobies: " + hobbies)
// + operator is used to concatenate (join) strings and variables together

// you can check the data type of a variable using the typeof operator
