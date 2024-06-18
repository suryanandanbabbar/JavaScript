const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenNumbers = numbers.filter(function (number) {
	return number % 2 === 0;
});

// Short Version
var evenNumbers = numbers.filter((number) => number % 2 === 0);

// Same with forEach
let evenNumbers = [];
numbers.forEach((number) => {
	if (number % 2 === 0) {
		evenNumbers.push(number);
	}
});
console.log(evenNumbers);
