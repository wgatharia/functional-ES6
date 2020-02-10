
// map applies a function to an array and returns mapped copy

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((x) => x * x);

console.log('New Numbers:', newNumbers);

//  example of mapping using a defined function

const double = (x) => x * 2;

const doubledNumbers = numbers.map(double);

console.log('Doubled Numbers:', doubledNumbers);
