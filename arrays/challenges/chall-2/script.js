const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Concatenating the arrays
const arr3 = [...arr1, ...arr2];

// Removing the extra '5'
arr3.splice(4, 1);

console.log(arr3);
