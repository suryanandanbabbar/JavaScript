function calculator(num1, num2, operator) {
	switch (operator) {
		case '+':
			return num1 + num2;
			break;
		case '-':
			return num1 - num2;
			break;
		case '*':
			return num1 * num2;
			break;
		case '/':
			return num1 / num2;
			break;
		default:
			return 'Invalid Operator';
	}
}

console.log(calculator(1, 2, '+'));
