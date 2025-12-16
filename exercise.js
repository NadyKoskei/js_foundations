//1.writting a greet function that takes a name as parameter and prints a greeting message to the console.
function greet(name) {
  console.log("hello " + name + "!");
}

greet("Nady");

//2.writting a function that calculates the sum of two numbers and returns the result.

function sum(a, b) {
  return a + b +" is the sum of " + a + " and " + b;
}
//return is used to output the result of the function when called.
//let sumResult = sum(17, 62); //calling the sum function with 17 and 62 as arguments
//console.log("Sum:", sumResult); //output the result

console.log(sum(11, 35)); //directly calling the sum function inside console.log

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

//4.writting a function that calculates the area of a rectangle given its height and width.
function area(height, width){
  return height * width +" is the area of a rectangle with height " + height + " and width " + width;
}
//let areaResult = area(9, 13); //calling the area function with 5 and 10 as arguments
//console.log("Area of rectangle:", areaResult); //output the result

console.log(area(8, 21)); //directly calling the area function inside console.log