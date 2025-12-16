//1.writting a greet function that takes a name as parameter and prints a greeting message to the console.
function greet(name) {
  console.log("hello " + name + "!");
}

greet("Nady");

//2.writting a function that calculates the sum of two numbers and returns the result.

function sum(a, b) {
  return a + b;
}
//return is used to output the result of the function when called.
let sumResult = sum(17, 62); //calling the sum function with 17 and 62 as arguments
console.log("Sum:", sumResult); //output the result

console.log("Sum:", sum(11, 35)); //directly calling the sum function inside console.log

//3.writting a function that checks if a number is even or odd and returns a corresponding message.
function checkEvenOdd(num) {
if (num % 2 === 0) {
  return num + " is an even number.";}
  else {
    return num + " is an odd number.";
  }
}
console.log (checkEvenOdd(10)); //calling the function with 10 as argument
console.log (checkEvenOdd(7)); //calling the function with 7 as argument

//4.
