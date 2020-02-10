const divide = (x, y) => x / y;

const secondArgumentIsnotZero = (func) => (...args) => {
    if (args[1] === 0) {
        console.log('Error: dividing by zero.');
        return null;
    }
    return func(...args);
};

const safeDivide = secondArgumentIsnotZero(divide);

console.log(safeDivide(7, 2));
