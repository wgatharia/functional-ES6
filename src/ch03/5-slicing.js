// slice is a mutator fuction

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.slice(3, 8));

// call with no arguments gives a copy of original array

console.log(numbers.slice());

//  use a mutator function with copied data
console.log(numbers.slice().reverse());
