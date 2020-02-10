// recreate the map function
const map = (arr, func) => {
    const result = [];
    arr.forEach((element) => {
        result.push(func(element));
    });
    return result;
};

//  recreate using reduce

const map2 = (arr, func) => arr.reduce((acc, x) => [
    ...acc,
    func(x),
], []);

// testing if it works:

// Should be [2, 4, 6]
console.log(map([1, 2, 3], (x) => x * 2));
console.log(map2([1, 2, 3], (x) => x * 2));

// Should be [-5, -6, -7, -8, -9, -10]
console.log(map([5, 6, 7, 8, 9, 10], (x) => -x));
console.log(map2([5, 6, 7, 8, 9, 10], (x) => -x));

// Should be ['A', 'B', 'C', 'D']
console.log(map(['a', 'b', 'c', 'd'], (x) => x.toUpperCase()));
console.log(map2(['a', 'b', 'c', 'd'], (x) => x.toUpperCase()));
