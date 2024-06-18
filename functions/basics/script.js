// Declaring a function
function sayHello() {
	console.log('Hello World');
}

// Calling the function
sayHello();

// Declaring a function with two parameters
function add(num1, num2) {
	console.log(num1 + num2);
}

// Calling the function with two parameters
add(5, 10);

function subtract(num1, num2) {
	// Using 'return' does not print anything on console
	return num1 - num2;
}

// Does not print anything on the console
subtract(10, 2);
// Using console.log()
console.log(subtract(10, 2));
// Or:
const result = subtract(10, 2);
console.log(result);
