//ARRAY is a group of similar types of data stored together in a single variable.
//are used to store multiple values in a single variable.
// They help organize data and make it easier to manage (perform certaion actions on) collections of related items.
//you use square brackets [] to define an array, and elements are separated by commas.

let fruits = ["apple", "banana", "cherry"];
//you access the array by its name 'fruits'
console.log("Fruits array:", fruits);

// accessing elements in an array using their index (starting from 0) ie 'fruits[0]' accesses the first element "apple"
//javaScript arrays are ZERO-INDEXED, meaning the first element is at index 0, the second at index 1, and so on.
//INDEX is the position of an element in the array.
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Third fruit:", fruits[2]);



// LENGTH property returns the number of elements in an array. this is not a method, so it does not require parentheses.

console.log("Number of fruits:", fruits.length);

//ARRAY METHODS allow you to manipulate and interact with arrays in various ways.
//to write an array method, you call the method on the array using dot notation after the array name followed by parentheses () which may include arguments and end with a semicolon ;.
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
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
//in this case, the function is converting each fruit name to uppercase.
// the new array upperFruits contains the uppercase versions of the fruit names, while the original fruits array remains unchanged.
console.log("Uppercase fruits:", upperFruits);
console.log("Original fruits after map:", fruits);

// FILTER method creates a new array with all elements that pass the test (meet a certain condition) implemented by the provided function. Is a non-mutating method because it does not change the original array.
let filteredFruits = fruits.filter(fruit => fruit.startsWith("b"));
//in this case, the function checks if each fruit name starts with the letter "b".
// the new array filteredFruits contains only the fruit names that start with "b", while the original fruits array remains unchanged.
console.log("Filtered fruits (start with 'b'):", filteredFruits);
console.log("Original fruits after filter:", fruits);

// SLICE method extracts a section of an array and returns a new array. Is a non-mutating method because it does not change the original array, this method takes two arguments: the start index and the end index (not inclusive).
let citrusFruits = fruits.slice(1, 3);
//in this case, it extracts elements from index 1 to index 3 (not including index 3).
// the new array citrusFruits contains the extracted elements, while the original fruits array remains unchanged.
console.log("Citrus fruits (slice):", citrusFruits);
console.log("Original fruits after slice:", fruits);


// SPLICE method removes or replaces existing elements and/or adds new elements in place. Is a mutating method because it changes the original array, this method takes at least two arguments: the start index and the number of elements to remove. Additional arguments can be provided to add new elements.

// INDEXOF method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = fruits.indexOf("cherry");
console.log("Index of cherry:", index);

// SORT method sorts the elements of an array in place and returns the sorted array. Is a mutating method because it changes the original array.

let prices = [340, 520, 85, 117, 45, 754, 500]; // Original array
// Sort from highest to lowest by using a custom compare function ((a, b) => b - a) 

prices.sort((a, b) => b - a);
console.log("Sorted prices (highest to lowest):", prices);
// Get the most expensive (first element after sorting)
let mostExpensive = prices[0];
// Get the least expensive (last element after sorting)
let leastExpensive = prices[prices.length - 1];

console.log("Most expensive price:", mostExpensive);
console.log("Least expensive price:", leastExpensive);

//SEARCHING AN ARRAY

// includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.




