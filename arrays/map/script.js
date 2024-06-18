const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Using forEach
const doubledNumbers2 = [];

numbers.forEach((number) => {
	doubledNumbers2.push(number * 2);
});
console.log(doubledNumbers2); // [2, 4, 6, 8, 10]
