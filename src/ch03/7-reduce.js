// reduces data using a function. must pass the initial result element

const numbers = [5, 7, 2, 40, 23, 14, 8, 4, 11];

const sum = numbers.reduce((prev, curr) => {
    console.log(`Prev is ${prev}`);
    console.log(`Current is ${curr}`);
    return prev + curr;
}, 0);

console.log(sum);

// calculate product -> starting value should be 1

const product = numbers.reduce((prev, curr) => prev * curr, 1);

console.log(product);
