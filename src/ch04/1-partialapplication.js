// reducing a function with fixed arguments
// create a fixed function

const add = (x, y, z) => x + y + z;

const addPartial = (x) => (y, z) => add(x, y, z);

const add5 = addPartial(5);

const sum = add5(6, 7);

console.log(sum);

// create a partial with 2 parameters

const addPartial2 = (x, y) => (z) => add(x, y, z);

const add5and6 = addPartial2(5, 6);

const result = add5and6(7);

console.log(result);

// add one parameter at a time
const addPartial3 = (x) => (y) => (z) => add(x, y, z);

const addFive = addPartial3(5);

const addFiveAndSix = addFive(6);

const result2 = addFiveAndSix(7);

console.log(result2);

// we do not have to create the intermidiates

const result3 = addPartial3(5)(6)(7);

console.log(result3);
