//  traditional functions

function myFunction(arg1, arg2) {
    //  function body
    return arg1 + arg2;
}

const myOtherFunction = function (arg1, arg2) {
    //  function body
    return arg1 + arg2;
};

console.log(myFunction(2, 4));

console.log(myOtherFunction(2, 4));

const add = (x, y) => x + y;

console.log(`2 + 4 = ${add(2, 4)}!`);

const double = (number) => number * 2;

console.log(double(4));

//  arrow function with no input
const sayHello = () => console.log('Hello');

sayHello();

//  arrow function that returns an object mist wrap object in parenthesis

const getPersonData = () => ({
    name: 'John Doe',
});

console.log(getPersonData());
