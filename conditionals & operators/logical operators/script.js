// Logical AND - && - Will return the first falsy value or the last value
console.log(10 > 20); // false
console.log(10 > 20 && 30 > 15); // false
console.log(10 < 20 && 30 > 15); // true
// Application
const posts = [];
console.log(posts[0]); // undefined
posts.length > 0 && console.log(posts[0]); // it will show nothing

// Logical OR - || - Will return the first truthy value or the last value
console.log(10 > 20 || 30 > 15); // true
console.log(10 > 20 || 30 < 15); // false

let b;
b = 10 || 20; // 10
b = 0 || 20; // 20
b = 0 || null || '' || undefined; // undefined
console.log(b);

// ?? - Returns the right side of the operand when the left is null or undefined
let c;

c = 10 ?? 20; // 10
c = null ?? 20; // 20
c = undefined ?? 20; // 20
c = 0 ?? 30; // 0
c = '' ?? 30; // ''

console.log(c);
