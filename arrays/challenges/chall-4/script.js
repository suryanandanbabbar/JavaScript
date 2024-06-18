const arr = [2, -30, 50, 20, -12, -9, 7];

// Using for Loop
let sum = 0;
for (const number of arr) {
	if (number >= 0) {
		sum += number;
	} else {
		continue;
	}
}
console.log(sum); // 79

// Using filter and reduce
const positiveSum = arr
	.filter((number) => number >= 0)
	.reduce((acc, cur) => acc + cur, 0);

console.log(positiveSum); // 79
