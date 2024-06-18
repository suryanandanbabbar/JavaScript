let x;

// Creating an empty object
// const todo = {};
const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Using Spread Operator(...)
const obj3 = { ...obj1, ...obj2 };

// Using assign
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
	{ id: 1, name: 'Buy Milk' },
	{ id: 2, name: 'Pickup kids from school' },
	{ id: 3, name: 'Take out trash' },
];

x = todos[0].name;

x = Object.keys(todo);

x = todo.length; // undefined
x = Object.keys(todo).length; // 3

x = Object.values(todo); // Get the Values

x = Object.entries(todo); // Get the Key-Value Pairs

x = todo.hasOwnProperty('name'); // Check if key is present or not

console.log(x);
