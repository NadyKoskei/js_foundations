//LOOPS are used to repeatedly execute a block of code until a condition is met.
// They help automate repetitive tasks and reduce code duplication.

//FOR LOOP is used when the number of iterations is known beforehand.
//for (initialization; condition; increment) {
  // code block }


for (let i = 0; i <= 5; i++) {
    // 'i' is the loop counter, starting from 0 and incrementing by 1 until it reaches 5
    console.log("For Loop iteration:", i);
}

//WHILE LOOP is used when the number of iterations is not known and depends on a condition.
//while (condition) {
  // code block }

let j = 0; // initialization
while (j < 5) { // condition
    console.log("While Loop iteration:", j);
    j++; // increment
}

//DO-WHILE LOOP is similar to the while loop, but it guarantees that the code block is executed at least once before checking the condition.
//do {
  // code block
//} while (condition);

let k = 0; // initialization
do {
    console.log("Do-While Loop iteration:", k);
    k++; // increment
} while (k < 5); 