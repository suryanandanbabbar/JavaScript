// Default Parameters
function registerUser(user = 'Bot') {
	return user + ' is registered';
}

console.log(registerUser()); // Bot is registered
console.log(registerUser('John')); // John is registered

// Rest Parameters
function sum(...numbers) {
	return numbers;
}

console.log(sum(1, 2, 3)); // [1,2,3]

function s(...numbers) {
	let total = 0;
	for (const num of numbers) {
		total += num;
	}
	return total;
}

console.log(s(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 45

// Objects as Parameters
function loginUser(user) {
	return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
	id: 1,
	name: 'John',
};
console.log(loginUser(user));
console.log(
	loginUser({
		id: 2,
		name: 'Sara',
	})
);

// Arrays as Parameters
function getRandom(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);

	const item = arr[randomIndex];

	console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
