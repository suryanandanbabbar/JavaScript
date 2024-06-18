const age = 19;

// Using an if statement
if (age >= 18) {
	console.log('You can vote');
} else {
	console.log('You cannot vote');
}

// Using a ternary operator
age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'You cannot vote';
console.log(canVote);
console.log(canVote2);

// Multiple statements
const auth = true;
// let redirect;

// if (auth) {
// 	alert('Welcome to the dashboard');
// 	redirect = '/dashboard';
// } else {
// 	alert('Access Denied');
// 	redirect = '/login';
// }
// console.log(redirect); // /dashboard

// Using ternary operator
const redirect = auth
	? (alert('Welcome to the dashboard'), '/dashboard')
	: (alert('Access Denied'), '/login');
console.log(redirect); // /dashboard

auth ? console.log('Welcome to the dashboard') : null; // Welcome to the dashboard

auth && console.log('Welcome to the dashboard'); // Welcome to the dashboard
