let x;

const person = {
	name: 'John Doe',
	age: 30,
	isAdmin: true,
	address: {
		street: '123 Main St',
		city: 'Dalhousie',
		state: 'HP',
	},
	hobbies: ['music', 'sports'],
};

// Accessing the values using keys
x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

// Updating the values
person.name = 'Jane Doe';
person['isAdmin'] = false;

// Deleting the values
delete person.age;

// Adding the values
person.hasChildren = true;

// Using functions
person.greet = function () {
	console.log(`Hello, my name is ${this.name}`);
};
person.greet();

const person2 = {
	'first name': 'Suryanandan',
	'last name': 'babbar',
};

x = person2['first name'];

console.log(x);
