let x;

// 1. Arithmetic operators

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;

// Concatenation
x = 'Hello' + ' ' + 'World';

// Exponent
x = 2 ** 4;

// Increment
x = 1;
// x = x + 1;
// x += 1;
x++;

// Decrement
x = 1;
// x = x - 1
// x -= 1;
x--;

// 2. Assignment Operators
x = 10;
x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

// 3. Comparison Operators
x = 2 == 2; // true
x = 2 == '2'; // true as well as it does not test for type
x = 2 === '2'; // false as it tests for type as well
x = 2 != 2; // false
x = 2 !== '2'; // true

x = 10 > 5; // true
x = 10 < 5; // false
x = 10 <= 5; // false
x = 10 >= 5; // true

console.log(x);
