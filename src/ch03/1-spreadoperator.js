// Start with two objects

const person = {
    name: 'Jim Smith',
    age: 40,
    hairColor: 'brown',
    eyeColor: 'blue',
};

const careerData = {
    title: 'Developer',
    company: 'Some Company',
};

//  use spread to combine the two.

const personWithCareerData = {
    ...person,
    ...careerData,
};

console.log(personWithCareerData);

//  we can pull partial

const personWithCareerData2 = {
    name: person.name,
    ...careerData,
};

console.log(personWithCareerData2);

// if data being combined has same properties, last one takes override
// Say we want to update career data

const update = {
    title: 'senior developer',
};

const updated = {
    ...person,
    ...careerData,
    ...update,
};

console.log(updated);

// spread operator can be used on arrays
const numbers = [1, 2, 3, 4, 5];

const newNumbers = [
    0,
    ...numbers,
    7,
];

console.log(newNumbers);
