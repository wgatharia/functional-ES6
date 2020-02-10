// used for sorting - it is a mutator function.
// uses a comparator that should return 1, 0 or -1

const mixedUpNumbers = [10, 2, 4, 3, 7, 5, 8, 9, 1, 6, 11];

// if we want to sort ascending. create a comparative function.

const ascending = (a, b) => {
    if (a < b) return -1;
    if (b < a) return 1;
    return 0;
};

const sortedAscending = mixedUpNumbers.slice().sort(ascending);
console.log(sortedAscending);

const descending = (a, b) => {
    if (a < b) return 1;
    if (b < a) return -1;
    return 0;
};

const sortedDescending = mixedUpNumbers.slice().sort(descending);
console.log(sortedDescending);
