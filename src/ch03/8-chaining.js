const employees = [{
    name: 'John Olsen',
    age: 54,
    jobTitle: 'developer',
    salary: 70000,
}, {
    name: 'Karen Norris',
    age: 34,
    jobTitle: 'engineer',
    salary: 75000,
}, {
    name: 'Daryl Cline',
    age: 25,
    jobTitle: 'secretary',
    salary: 54000,
}, {
    name: 'Abbey Garcia',
    age: 40,
    jobTitle: 'developer',
    salary: 100000,
}, {
    name: 'Finn Smith',
    age: 29,
    jobTitle: 'engineer',
    salary: 40000,
}, {
    name: 'Eve Wordsworth',
    age: 20,
    jobTitle: 'developer',
    salary: 65000,
}, {
    name: 'Ronald Jacobs',
    age: 60,
    jobTitle: 'developer',
    salary: 90000,
}];

// compare how the developer salary compares with others

const developers = employees.filter((employee) => employee.jobTitle === 'developer');

console.log(developers);

const developerSalaries = developers.map((employee) => employee.salary);

console.log(developerSalaries);

const totalDeveloperSalaries = developerSalaries.reduce((prev, curr) => prev + curr, 0);
const averageDeveloperSalary = totalDeveloperSalaries / developerSalaries.length;
console.log(averageDeveloperSalary);

const nonDevelopers = employees.filter((employee) => employee.jobTitle !== 'developer');

console.log(nonDevelopers);

const nonDeveloperSalaries = nonDevelopers.map((employee) => employee.salary);

console.log(nonDeveloperSalaries);

const totalNonDeveloperSalaries = nonDeveloperSalaries.reduce((prev, curr) => prev + curr, 0);
const averageNonDeveloperSalary = totalNonDeveloperSalaries / nonDeveloperSalaries.length;
console.log(averageNonDeveloperSalary);
