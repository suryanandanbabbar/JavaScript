// Global Scope
const x = 100;
console.log(x, 'in global');

function run() {
	console.log(window.innerHeight, 'innerHeight');
	console.log(window.innerWidth, 'inner Width');
	console.log(x, 'in function');
}
run();

if (true) {
	console.log(x, 'in block');
}

// Function Scope
function add() {
	// Here it overides the previously defined x (variable shadowing)
	const x = 1;
	const y = 50;
	console.log(x + y);
}
add();
