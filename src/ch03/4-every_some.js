// every & some return true or false as result of testing an array

const isOdd = (x) => x % 2 === 1;

const numbers = [1, 2, 3, 4, 5, 6];

console.log('All numbers are odd?:', numbers.every(isOdd));

console.log('Numbers has some odd ones?:', numbers.some(isOdd));

// lets look at a typical application.
// We have a pay roll and would like to know if some employees make more than a million.

const employees = [
    {
        name: 'John Doe',
        salary: 250000,
    },
    {
        name: 'Bob Doe',
        salary: 150000,
    },
    {
        name: 'Mary Smith',
        salary: 1500000,
    },
];

const makesMoreThanAMillion = (employee) => employee.salary > 1000000;

console.log('Do we have employees making more than one millions?:', employees.some(makesMoreThanAMillion));

//  using every to test form data. Say that goes to an array of strings.

const formValues = [
    'Shawn',
    'Wassel',
    'Maine',
    '',
];

// use double not because empty string evalues to true when using !
const isNotEmpty = (string) => !!string;

console.log('All form data filled?:', formValues.every(isNotEmpty));
