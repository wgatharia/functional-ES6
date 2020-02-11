// functions like objects have a name and properties

const add = (x, y, z) => x + y + z;

console.log(add.name);

console.log(add.length);

console.log(add.toString());

// call is a property of the function
// can be used to call function

console.log(add.call(null, 1, 2, 7));

// apply

console.log(add.apply(null, [1, 2, 7]));

// using spread to pass parameters

const args = [1, 2, 3];

console.log(add(...args));

// use bind to fix arguments

const add1 = add.bind(null, 1);

console.log(add1(2, 3));
