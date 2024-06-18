// Arrow Function
const add = (a, b) => {
	return a + b;
};

// Implicit Return
const subtract = (a, b) => a - b;

// Can leave off () with a single parameter
const double = (a) => a * 2;

// Returning an object
const createObject = () => ({
	name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
	console.log(n);
});

// Arrow Function in a callback
numbers.forEach((n) => console.log(n)); // Returns 1 - 5

console.log(add(1, 2)); // 3
console.log(subtract(10, 5)); // 5
console.log(double(10)); // 20
console.log(createObject()); // {name: 'Brad'}
