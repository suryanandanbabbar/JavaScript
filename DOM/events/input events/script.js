const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
	heading.textContent = e.target.value;
}

function onChecked(e) {
	const isChecked = e.target.checked;
	heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus() {
	console.log('Input is focused');
	itemInput.style.outlineStyle = 'solid';
	itemInput.style.outlineWidth = '1px';
	itemInput.style.outlineColor = 'green';
}

function onBlur() {
	console.log('Input is Blurred');
	itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput); // better way
priorityInput.addEventListener('change', onInput); // alternative way for select
checkbox.addEventListener('input', onChecked); // For Checkboxes
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
