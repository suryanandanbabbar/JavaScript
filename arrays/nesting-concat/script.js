let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Nesting berries in fruits results in nested array
// fruits.push(berries);

// x = fruits[3][1]; // blueberry

// Nesting both
const allfruits = [fruits, berries];

x = allfruits[1][0]; // strawberry

// One single array
x = fruits.concat(berries);

// Spread Operator (...)
x = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// Static Methods on Array Objects

// Checks if the given input is array or not
x = Array.isArray(fruits); // true
x = Array.isArray('hello'); // false

// Creates an Array
x = Array.from('12345'); // ['1', '2', '3', '4', '5']

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c); // [1,2,3]

console.log(x);
