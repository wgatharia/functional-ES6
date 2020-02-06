/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const sayHello = (name) => console.log(`Hello ${name}`);

const sayHello2 = sayHello;

sayHello2('William');

//  use of ternary operator

const DEVELOPMENT = true;


const fetchDataReal = () => {
    //  time intensive data pull
};

const fetchDataFake = () => ({
    name: 'John Doe',
});

const fetchData = DEVELOPMENT ? () => fetchDataFake() : () => fetchDataReal();

fetchData();

//  shorter version
const fetchData2 = DEVELOPMENT ? fetchDataFake : fetchDataReal;

fetchData2();

// function arrays - useful when we want to apply multiple functions to the same input.
const double = (x) => x * 2;
const subtractOne = (x) => x - 1;
const tripple = (x) => x * 3;
const add5 = (x) => x + 5;

const myNumber = 42;

//  old way
const doubled = double(myNumber);
const minusone = subtractOne(myNumber);
// ..

const functionArray = [
    double,
    subtractOne,
    tripple,
    add5,
    Math.sqrt, //   we can add a defined function
];

//  we can use a forEach loop to loop throough functions

let number = 42;

// eslint-disable-next-line no-return-assign
functionArray.forEach((func) => number = func(number));

console.log(number);
