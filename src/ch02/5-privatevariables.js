/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */

const Person = ({ name, age, job }) => {
    const _name = name;
    const _age = age;
    let _job = job;

    return {
        getName: () => _name,
        getAge: () => _age,
        getJob: () => _job,
        setJob: (newJob) => { _job = newJob; },
    };
};

const me = Person({ name: 'William', age: 25, job: 'Developer' });

console.log(me.getName());
// cannot access internal age due to closure
console.log(me._age);
console.log(me.getJob());
me.setJob('Manager');
console.log(me.getJob());
