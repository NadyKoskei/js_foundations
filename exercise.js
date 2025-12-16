//1.writting a greet function that takes a name as parameter and prints a greeting message to the console.
function greet(name) {
  console.log("hello " + name + "!");
}

greet("Nady");

//2.writting a function that calculates the sum of two numbers and returns the result.

function sum(a, b) {
  return a + b + " is the sum of " + a + " and " + b;
}
//return is used to output the result of the function when called.
//let sumResult = sum(17, 62); //calling the sum function with 17 and 62 as arguments
//console.log("Sum:", sumResult); //output the result

console.log(sum(11, 35)); //directly calling the sum function inside console.log

//3.writting a function that checks if a number is even or odd and returns a corresponding message.
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return num + " is an even number.";
  } else {
    return num + " is an odd number.";
  }
}
console.log(checkEvenOdd(10)); //calling the function with 10 as argument
console.log(checkEvenOdd(7)); //calling the function with 7 as argument

//4.writting a function that calculates the area of a rectangle given its height and width.
function area(height, width) {
  return (
    height * width +
    " is the area of a rectangle with height " +
    height +
    " and width " +
    width
  );
}
//let areaResult = area(9, 13); //calling the area function with 5 and 10 as arguments
//console.log("Area of rectangle:", areaResult); //output the result

console.log(area(8, 21)); //directly calling the area function inside console.log

//5.writting a function that converts Celsius to Fahrenheit and returns the converted temperature.
function celsiusToFahrenheit(celsius) {
  return (
    (celsius * 9) / 5 +
    32 +
    "°F is the temperature in Fahrenheit for " +
    celsius +
    "°C."
  );
}
console.log(celsiusToFahrenheit(25)); //calling the function with 25 as argument

//6.writing a fizz buzz function
function fizzBuzz(n) {
  if (n % 5 === 0 && n % 3 !== 0) {
    return "buzz";
  } else if (n % 3 === 0 && n % 5 !== 0) {
    return "fizz";
  } else if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  } else {
    return n;
  }
}
console.log(fizzBuzz(9)); //should return "fizz"
console.log(fizzBuzz(10)); //should return "buzz"
console.log(fizzBuzz(15)); //should return "fizzbuzz"
console.log(fizzBuzz(7)); //should return 7

//7.writting a function that checks if a year is a leap year or not.
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return year + " is a leap year.";
  } //a leap year is divisible by 4 but not by 100, unless it is also divisible by 400.
  else {
    return year + " is not a leap year.";
  }     
}
console.log(isLeapYear(2020)); //should return "2020 is a leap year."
console.log(isLeapYear(1900)); //should return "1900 is not a leap year."