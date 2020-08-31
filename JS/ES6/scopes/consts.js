function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }

    // Only change code above this line

}

printManyTimes("freeCodeCamp");

/*
When you declare a const object, You can still modify it's properties
 */

const s = [5, 7, 2];

function editInPlace() {
    'use strict';
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    return s
}

editInPlace();

/*
Prevent Object Mutation

Once the object is frozen, you can no longer add, update, or delete properties from it.
Any attempt at changing the object will be rejected without an error.
 */

function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    // Only change code below this line


    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

/*


 */