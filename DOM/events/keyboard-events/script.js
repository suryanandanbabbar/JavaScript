const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
	console.log('key press');
};
const onKeyUp = (e) => {
	console.log('key up');
};
const onKeyDown = (e) => {
	// key
	// if (e.key === 'Enter') {
	// 	alert('You pressed enter');
	// }

	// keyCode
	// https://www.toptal.com/developers/keycode/table
	if (e.keyCode === 13) {
		alert('You pressed enter');
	}

	// code
	if (e.code === 'Digit1') {
		alert('You pressed 1');
	}

	if (e.repeat) {
		console.log('You are holding down ' + e.key);
	}

	console.log('Shift: ' + e.shiftKey);
	console.log('Ctrl: ' + e.ctrlKey);
	console.log('Option/Alt: ' + e.altKey);
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
