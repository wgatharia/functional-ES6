const electionVotes = [
    'Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Ashley',
    'Connor', 'Rick', 'Ashley', 'Rick', 'Albert', 'Ben',
    'Michael', 'Rick', 'Albert', 'Karen', 'Harry',
    'Karen', 'Donna', 'Ashley', 'Albert', 'Harry',
    'Dane', 'Dane', 'Rick', 'Donna', 'Mortimer',
];

const tallyVotes = (votes) => {
    let result = {};
    const names = votes.filter((item, index) => votes.indexOf(item) === index);
    // filter each name and count total
    names.forEach((name) => {
        const count = votes.filter((vote) => vote === name).length;
        // merge to the results
        result = { ...result, [name]: count };
    });
    return result;
};

const tallyVotes2 = (votes) => votes.reduce((acc, name) => ({
    ...acc,
    [name]: acc[name] ? acc[name] + 1 : 1,
}), {});

/* Expected Output (something like this):
    {
        Harry: <some number>
        Donna: <some number>
        Rick: <some number>
        ...
    }
*/
console.log(tallyVotes(electionVotes));
console.log(tallyVotes2(electionVotes));
