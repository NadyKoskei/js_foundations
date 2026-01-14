//ARRAYS are used to store multiple values in a single variable.
// They help organize data and make it easier to manage collections of related items.
//you use square brackets [] to define an array, and elements are separated by commas.

let fruits = ["apple", "banana", "cherry"];
console.log("Fruits array:", fruits);

// Accessing elements in an array using their index (starting from 0)
//INDEX is the position of an element in the array and it starts from 0 for the first element.
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Third fruit:", fruits[2]);

// LENGTH property returns the number of elements in an array. this is not a method, so it does not require parentheses.
console.log("Number of fruits:", fruits.length);

//ARRAY METHODS allow you to manipulate and interact with arrays in various ways.
//MUTATING METHODS modify the original array, while NON-MUTATING METHODS return a new array or value without changing the original array.

// PUSH method adds one or more elements to the END of an array and returns the new length of the array. Is a mutating method because it changes the original array.
fruits.push("date");
console.log("After push:", fruits);

// POP method removes the last element from an array and returns that element. Is a mutating method because it changes the original array.
let lastFruit = fruits.pop();
console.log("Popped fruit:", lastFruit);
console.log("After pop:", fruits);

// SHIFT method removes the first element from an array and returns that element. Is a mutating method because it changes the original array.
let firstFruit = fruits.shift();
console.log("Shifted fruit:", firstFruit);
console.log("After shift:", fruits);

// UNSHIFT method adds one or more elements to the beginning of an array and returns the new length of the array. Is a mutating method because it changes the original array.
fruits.unshift("avocado");
console.log("After unshift:", fruits);

//MAP method creates a new array populated with the results of calling a provided function on every element in the calling array. Is a non-mutating method because it does not change the original array.

// FILTER method creates a new array with all elements that pass the test (meet a certain condition) implemented by the provided function. Is a non-mutating method because it does not change the original array.

// SLICE method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

// SPLICE method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// INDEXOF method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = fruits.indexOf("cherry");
console.log("Index of cherry:", index);
