/*
Destructuring Assignment to Extract Values from Objects.
 */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today, tomorrow } = HIGH_TEMPERATURES

/*
Destructuring Assignment to Assign Variables from Objects
 */

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES

/*
Destructuring Assignment to Assign Variables from Nested Objects
 */

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday}} = LOCAL_FORECAST


/*
Destructuring Assignment to Assign Variables from Arrays
 */

let a = 8, b = 6;
[a, b] = [b, a]

/*
Destructuring Assignment with the Rest Parameter to Reassign Array Elements
 */

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [a, b, ...arr] = list; // Change this line
    return arr;
}
const arr = removeFirstTwo(source);

