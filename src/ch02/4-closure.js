
const createPrinter = () => {
    const myNumber = 42;

    return () => console.log(`My favourite number is ${myNumber}`);
};


const printer = createPrinter();

printer();

// The myNumber is accessibe to the function that was returned by function.
