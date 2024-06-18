let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

// Index Position
x = numbers[0];

// Concatenating
x = numbers[0] + numbers[3];

// Template Literal
x = `My favourite fruit is ${fruits[2]}`;

// Length of the array
x = numbers.length;

// Changing Items
fruits[1] = 'pear';
x = fruits;

// Adding Items
fruits[3] = 'strawberry';
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';
fruits.push('banana');
console.log(x);
