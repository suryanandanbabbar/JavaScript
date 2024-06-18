// IF-ELSE
if (true) {
	console.log('This is true');
}
if (false) {
	console.log('This is not true');
}

const x = 10;
const y = 5;
if (x > y) {
	console.log(`${x} is greater than ${y}`);
}
if (x == y) {
	console.log(`${x} is equal to ${y}`);
} else {
	console.log(`${x} is not equal to ${y}`);
}

if (x !== y) {
	const z = 20;
	console.log(`${z} is 20`);
}
// console.log(z);  Error (use var as it is function scoped)

// Shorthand If
if (x >= y) console.log(`${x} is greater than ${y}`);
else console.log('This is false');

// IF-ELSE IF-ELSE
const d = new Date(10, 30, 2022, 8, 0, 0);
const hour = d.getHours();

if (hour < 12) {
	console.log('Good Morning');
} else if (hour < 18) {
	console.log('Good Afternoon');
} else {
	console.log('Good Night');
}

// Nesting
if (hour < 12) {
	if (hour == 6) {
		console.log('Wake Up!');
	}

	console.log('Good Morning');
} else if (hour < 18) {
	console.log('Good Afternoon');
} else {
	if (hour >= 20) {
		console.log('zzzzzz');
	}
	console.log('Good Night');
}

// && (and)
if (hour >= 7 && hour < 15) {
	console.log('It is work time');
}

// || (or)
if (hour === 6 || hour === 20) {
	console.log('Brush your teeth');
}
