// filter works with a boolean condition. used to select data e.g. give me even numbers in a list

const isEven = (x) => x % 2 === 0;

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(isEven);

console.log('Even numbers:', evenNumbers);

// use filter to get words with more than 5 letters length

const words = [
    'hello',
    'goodbye',
    'the',
    'antartica',
];

const wordsLongerThanFive = words.filter((word) => word.length > 5);

console.log('Words longer than Five:', wordsLongerThanFive);

//  create a higher order fucntion for length test

const createLengthTest = (minLength) => (word) => word.length > minLength;

const longWords = words.filter(createLengthTest(5));

console.log('Words longer than Five:', longWords);
