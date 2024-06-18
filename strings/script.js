let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// Strings Properties and Methods
const s = new String('Hello World');
x = typeof s; // Object

x = s.length; // 11

// Access value by key
x = s[0]; // H

x = s.__proto__; // Different Methods

x = s.toUpperCase(); // Uppercase
x = s.toLowerCase(); // Lowercase

x = s.charAt(0); // H

x = s.indexOf('H'); // 0
x = s.indexOf('e'); // 1

x = s.substring(0, 4); // Hell
x = s.substring(7); // orld

x = s.slice(-11); // Hello World
x = s.slice(-11, -6); // Hello

x = '   Hello World';
x = s.trim(); // Trims the whitespaces

x = s.replace('World', 'John'); // Hello John

x = s.includes('Hello'); // true
x = s.includes('Helle'); // false

x = s.valueOf(); // Hello World

x = s.split(' '); // ['Hello', 'World']
x = s.split(''); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

console.log(x);
