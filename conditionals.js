//CONDITIONALS let your program make decisions. They check if something is true or false, and then run different code depending on the result

//IF statement executes a block of code if a specified condition is truthy.
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}

let lowerLimit = 18;
let upperLimit = 35;
let age3 = 25;
if (age3 >= lowerLimit && age3 <= upperLimit) {
  console.log("You are youth.");
}

//IF-ELSE statement provides an alternative block of code to execute when the condition is falsy.
let age2 = 16;

if (age2 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//ELSE IF statement allows you to check multiple conditions in sequence. Used after first if and before last else
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}


let age4 = 15;

if (age4 >= 3 && age4 <= 9) {
  console.log("you are in lower primary");
} else if (age4 > 9 && age4 <= 13) {
  console.log("you are in upper primary");
} else if (age4 > 13 && age4 <= 18) {
  console.log("you are in secondary school");
} else if (age4 > 18 && age4 <= 23) {
  console.log("you are in university");
} else {
  console.log("you are not in 8-4-4 system");
}

//SWITCH statement is used to perform different actions based on different conditions. It’s often cleaner than multiple if-else statements when checking the same variable against many values.
//CASE is each possible value that the switch statement checks against.
//BREAK is used to exit the switch statement once a matching case is found and executed.
//DEFAULT case is executed if none of the other cases match.
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log("Day:", dayName);
