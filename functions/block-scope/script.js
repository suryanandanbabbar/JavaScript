// Block Scope

const x = 100;

// Here, 'y' is block level variable
if (true) {
	const y = 200;
	console.log(x + y); // 300
}

// console.log(x + y); // Error

// Here, 'i' is block level variable
for (let i = 0; i <= 10; i++) {
	console.log(i);
}

if (true) {
	const a = 500;
	let b = 600;
	var c = 700;
}
// console.log(a); // Error
// console.log(b); // Error
console.log(c); // 700, NO ERROR as var works outside the if block.

function run() {
	var d = 100;
	console.log(d);
}
run();
// console.log(d); Error as 'var' is function scoped.
