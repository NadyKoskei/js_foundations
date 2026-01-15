//LOOPS are used to repeatedly execute a block of code until a condition is met.
// They help automate repetitive tasks and reduce code duplication.

//FOR LOOP is used when the number of iterations is known beforehand.

// syntax: key word (counter variable initialization; condition to check before each iteration; update to modify the counter variable after each iteration) then the code block to be executed in each iteration is placed inside curly braces {}.
for (let i = 0; i <= 5; i++) {
    // 'i' is the loop counter, starting from 0 and incrementing by 1 until it reaches 5
    console.log("For Loop iteration:", i);
}

//COUNTER is the variable that keeps track of the number of iterations. It is initialized before the loop starts, checked in each iteration, and updated after each iteration. It is commonly named 'i', but you can use any valid variable name. It is usually initialized to 0 or 1.
// UPDATE is the operation that modifies the counter variable after each iteration. It can be an increment (increasing the value) or a decrement (decreasing the value). 
//any time the condition evaluates to true, the block of code will execute then the update operation happens only after the code block is executed in each iteration.
//once the condition evaluates to false, the loop stops executing.



//WHILE LOOP is used when the number of iterations is not known and depends on a condition.
//syntax: while (condition) {code block to be executed}

let j = 0; // initialization
while (j < 5) /*condition*/ {
    console.log("While Loop iteration:", j);
    j++; // increment
}

//DO-WHILE LOOP is similar to the while loop, but it guarantees that the code block is executed at least once before checking the condition.
//do {
  // code block
//} while (condition);

let k = 8; // initialization
do {
    console.log("Do-While Loop iteration:", k);
    k++; // increment
} while (k < 5); 

//FOR...OF LOOP is used to iterate over iterable objects like arrays, strings, etc.

//FOR ...IN LOOP is used to iterate over the enumerable properties of an object.