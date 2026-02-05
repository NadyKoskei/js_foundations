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

//8."Write a JavaScript program that takes an array of student scores and prints out whether each student has passed or failed. A student passes if their score is 50 or above. At the end, also print the total number of students who passed and failed."
//this uses an array and a for loop to iterate through the array elements.  then an if-else statement is used to check if each score is 50 or above to determine pass or fail.

let studentscore = [58, 77, 43, 85, 47, 62, 79, 81, 48, 60];
let passed = 0;
let failed = 0;

for (
  let i = 0;
  i < studentscore.length;
  i++ //keeps looping until i reaches the length of the array
) {
  if (studentscore[i] >= 50) {
    console.log("Student with score " + studentscore[i] + " has passed.");
    passed++;
  } else {
    console.log("Student with score " + studentscore[i] + " has failed.");
    failed++;
  }
}
console.log("Total students passed: " + passed);
console.log("Total students failed: " + failed);

//9. "Create a JavaScript program that takes an object representing a shopping cart (with items and their quantities). Loop through the cart and check: if the quantity of any item is greater than 0, print the item name and quantity. If the quantity is 0, print that the item is out of stock."

let shoppingcart = {
  pens: 4,
  pencils: 0,
  notebooks: 2,
  erasers: 0,
  markers: 5,
};

for (let item in shoppingcart) {
  //let item in shoppingcart  iterates over each key in the shoppingcart object. In this case, item will take the values "pens", "pencils", "notebooks", "erasers", and "markers" in each iteration.
  if (shoppingcart[item] > 0) {
    console.log(item + ": " + shoppingcart[item]);
  } else {
    console.log(item + ": Out of stock");
  }
}

//10. "Write a JavaScript program that takes an array of prices and prints out the highest and lowest prices."

let prices = [340, 520, 85, 117, 45, 754, 500];
let highestPrice = prices[0]; //initialize highestPrice with the first element of the array
let lowestPrice = prices[0]; //initialize lowestPrice with the first element of the array

for (
  let i = 1;
  i < prices.length;
  i++ //start from index 1 because I already used index 0 to initialize. The prices.length property gives the total number of elements in the prices array, so the loop continues until i is less than that length.
) {
  if (prices[i] > highestPrice) {
    highestPrice = prices[i];
  } //this checks if the current price is greater than the highestPrice found so far. If it is, it updates highestPrice to the current price.
  if (prices[i] < lowestPrice) {
    lowestPrice = prices[i];
  } //this checks if the current price is less than the lowestPrice found so far. If it is, it updates lowestPrice to the current price.
}
console.log(
  "Highest price: " + highestPrice + " and Lowest price: " + lowestPrice,
);

// 11. using bubble sort to find highest and lowest prices

function bubbleSortDescending(arr) {
  let n = arr.length;

  for (
    let i = 0;
    i < n - 1;
    i++ //the first loop runs from 0 to n-1, where n is the length of the prices array. This loop represents the number of passes needed to sort the array.
  ) {
    for (
      let j = 0;
      j < n - i - 1;
      j++ //the second loop runs from 0 to n-i-1. This loop compares adjacent elements in the array and swaps them if they are in the wrong order (i.e., if the current element is less than the next element for descending order).
    ) {
      if (
        arr[j] < arr[j + 1]
      ) //this condition checks if the current element (prices[j]) is less than the next element (prices[j + 1]). If true, it means they are in the wrong order for descending sort, so they need to be swapped. This wil repeat untill the condition is false then
      {
        let temp = arr[j]; //the temporary variable is used to hold the value of prices[j] during the swap
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let charges = [230, 150, 400, 320, 90, 600];
bubbleSortDescending(charges);
console.log("Sorted charges (highest to lowest):", charges);
console.log(
  "highest charge is " +
    charges[0] +
    " and the lowest charge is " +
    charges[charges.length - 1],
);

//bubble sort (ascending order)

function bubbleSortAscending(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let costs = [680, 450, 1200, 300, 150, 900];
bubbleSortAscending(costs);
console.log("Sorted costs (lowest to highest):", costs);
console.log(
  "lowest cost is " +
    costs[0] +
    " and the highest cost is " +
    costs[costs.length - 1],
);

//12. write a js program that prints the name and price of the most expensive and cheapest item



//13. given an array of prices x, and a range from y to z, find the prices that fall within that specified range.

function findPricesInRange(prices, min, max) {
  let pricesInRange = []; // Initialize an empty array to store prices within the range

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] >= min && prices[i] <= max) {
      pricesInRange.push(prices[i]); // Add price to the array if it falls within the range
    }
  }
  return pricesInRange;
}

let x = [340, 520, 85, 117, 45, 754, 500];
let y = 100;
let z = 600;
let result = findPricesInRange(x, y, z);
console.log("Prices within range " + y + " to " + z + ": " + result.join(", "));
