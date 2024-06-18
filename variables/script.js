// Ways to declare a variable
// var, let, const
// let, const are most used in ES6

let firstName = 'Suryanandan';
let lastName = 'Babbar';

console.log(firstName, lastName);

let age = 30;
console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// firstName = camelCase
// FirstName = PascalCase

// Re-assigning Variables
age = 31;
console.log(age);

// Declaring first
let score;
// Then giving the value
score = 1;
console.log(score);

if (true) {
	score += 1;
}
console.log(score);

// Creating an array
const arr = [1, 2, 3, 4];
console.log(arr);
// Adding Value to the array
arr.push(5);
// Printing with the updated value
console.log(arr);

// Creating an object
const person = {
	name: 'Surya',
};
// Re-assigning the value
person.name = 'John';
// Adding the value
person.email = 'john@gmail.com';
console.log(person);

// Declare multiple values at once
let a, b, c;
const d = 10,
	e = 20,
	f = 30;
console.log(d);
