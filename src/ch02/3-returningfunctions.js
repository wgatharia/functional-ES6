
const createPrinter = () => () => {
    console.log('Hello');
};

createPrinter();

// consider functions below
const double = (x) => x * 2;
const tripple = (x) => x * 3;
const quadruple = (x) => x * 4;

//   we can create a function factory

const createMultiplier = (y) => (x) => x * y;
const double2 = createMultiplier(2);
const tripple2 = createMultiplier(3);
const quadruple2 = createMultiplier(4);

console.log(double2(3));
console.log(tripple2(3));
console.log(quadruple2(3));
