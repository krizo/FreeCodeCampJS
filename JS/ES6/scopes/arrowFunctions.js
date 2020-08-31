/*
Use Arrow Functions to Write Concise Anonymous Functions

When there is no function body, and only a return value,
arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code.
This helps simplify smaller functions into one-line statements.
 */

const magic = () => new Date();
magic();

// This is the same as:
const magic = function() {
    return new Date();
};


/*
Arrow Functions with Parameters
 */

const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

/*
Default Parameters for Arrow Functions
 */

const increment = (number = 5, value = 1) => number + value;

/*
Rest Parameter with Function Parameters
With the rest parameter, you can create functions that take a variable number of arguments.
These arguments are stored in an array that can be accessed later from inside the function.
 */

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
