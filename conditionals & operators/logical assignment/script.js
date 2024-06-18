/* 
||= assigns the rght side to value only if the
    left side is a falsy value.

&&= assigns the right side value only if the
    left side is a truthy value.
    
??= assigns the right side only if the 
    left side is null or undefined
*/

// ||=
let a = false;
if (!a) {
	a = 10;
}
a = a || 10;
a ||= 10;
console.log(a); // 10

// &&=
let b = 10;
if (b) {
	b = 20;
}
b = b && 20;
b &&= 20;
console.log(b); // 20

// ??=
let c = false;

if ((c = null || c == undefined)) {
	c = 20;
}

c ??= 20;
console.log(c); // false
