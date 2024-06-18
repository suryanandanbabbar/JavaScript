/* 
Falsy Values:
- false
- 0
- "" or '' (Empty Strings)
- null
- undefined 
- NaN
*/

/* 
Truthy Values
- Everything else that is not falsy
- true
- '0' (0 in a string)
- 'false' (false in a string)
- [] (empty array)
- {} (empty object)
- function () {} (empty function)
*/

const x = [];

if (x) {
	console.log('This is truthy');
} else {
	console.log('This is falsy');
}
console.log(Boolean(x));

// Truthy and Falsy Caveats
const children = 0;

if (children) {
	console.log(`You have ${children} children`);
} else {
	console.log('Please enter number of children');
} // Please enter number of children

// Checking for empty arrays
const posts = [];

if (posts) {
	console.log('List Posts');
} else {
	console.log('No Posts To List');
} // List Posts

// Checking for empty objects
const user = {};

if (user) {
	console.log('List user');
} else {
	console.log('No user');
} // List user

// Loose Equality (==)
console.log(false == 0); // true
// Strict Equality (===)
console.log(false === 0); // false
