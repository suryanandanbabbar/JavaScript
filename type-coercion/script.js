let x;
x = 5 + '5'; // 55

x = 5 + Number('5'); // 10

x = 5 * '5'; // 25

x = 5 + null; // 5

x = Number(null); // 0

x = Number(true); // 1
x = Number(false); // 0

x = 5 + true; // 5 + 1 = 6 (true = 1)
x = 5 + false; // 5 + 0 = 5 (false = 0)

x = 5 + undefined; // NaN

console.log(x, typeof x);
