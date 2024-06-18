// Nested Scope

function first() {
	const x = 100;

	function second() {
		const y = 200;
		console.log(x + y);
	}

	// console.log(y); Error
	second();
}
first(); // 300

if (true) {
	const x = 100;
	if (x === 100) {
		const y = 200;
		console.log(x + y); // 300
	}
	// console.log(y); Error
}
