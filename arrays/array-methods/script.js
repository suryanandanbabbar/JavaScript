let x;

const arr = [34, 55, 95, 20, 15];

// Adding to the last
arr.push(100);

// Removing the last item
arr.pop();

// Adding to the beginning
arr.unshift(99);

// Removing from the beginning
arr.shift();

// Reversing the array
arr.reverse();

// Checking the value in the array
x = arr.includes(20);

// Index of the item
// If the item is not there, it gives '-1'
x = arr.indexOf(15);

// Slice
// Doesn't change the original array
x = arr.slice(1, 4);

// Plucks out the values from the array
x = arr.splice(1, 4);

console.log(x);
