const myString = 'developer';
let myNewString;

// Solution 1: My Solution
x = myString[0].toUpperCase();
myNewString = x + myString.substring(1);

// Solution 2: Using charAt(index)
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution 3: Using string[index]
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 4: Using Template Literals
myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(myNewString); // Developer
