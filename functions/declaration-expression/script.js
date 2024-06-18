// Function Declaration VS Expression

// Function Declaration
function addDollarSign(value) {
	return '$' + value;
} // No ';' in declaration

console.log(addDollarSign(100)); // $100

// Function Expression
const addPlusSign = function (value) {
	return '+' + value;
};

console.log(addPlusSign(200)); // +200
