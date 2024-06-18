// String (O/P: string)
const firstName = 'Sara';
console.log(firstName, typeof firstName); // typeof is used to print the data type

// Numbers (O/P: number)
const age = 30;
console.log(age, typeof age);

// Boolean (O/P: boolean)
const haskids = true;
console.log(haskids, typeof haskids);

// Null (O/P: object)
const aptNumber = null;
console.log(aptNumber, typeof aptNumber);

// Undefined (O/P: 'undefined')
let score;
console.log(score, typeof score);

// Symbol (O/P: 'symbol')
const id = Symbol('id');
console.log(id, typeof id);

// BigInt (O/P: 'bigint')
const n = 99999999999999n;
console.log(n, typeof n);

// Reference Types (O/P: 'object')
const numbers = [1, 2, 3, 4];
console.log(numbers, typeof numbers);

const person = {
	name: 'Brad',
};
console.log(person, typeof person);

function sayhello() {
	console.log('Hello');
}
console.log(sayhello, typeof sayhello);
