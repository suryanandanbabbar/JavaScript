let x;

// Square Root
x = Math.sqrt(9); // 3

// Absolute Number
x = Math.abs(5); // 5

// Round
x = Math.round(4.67); // 5
x = Math.ceil(4.2); // Round Up: 5
x = Math.floor(4.9); // Round Down: 4

// Power
x = Math.pow(2, 3); // 8

// Min
x = Math.min(4, 5); // 4

// Max
x = Math.max(4, 5, 3); // 5

// Random
x = Math.random(); // Gives a random decimal b/w 0 to 1
x = Math.random() * 10; // Gives a random decimal b/w 0 to 9
x = Math.random() * 10 + 1; // Gives a random decimal b/w 1 to 10
x = Math.floor(Math.random() * 10 + 1); // Gives a random int b/w 1 to 10

console.log(x);
