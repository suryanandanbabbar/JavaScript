function removeClearButton() {
	const clearBtn = document.querySelector('#clear');
	clearBtn.remove();
}
// removeClearButton();

function removeFirstItem() {
	const ul = document.querySelector('ul');
	const li = document.querySelector('li:first-child');

	ul.removeChild(li);
}
// removeFirstItem();

function removeItem(itemNumber) {
	const ul = document.querySelector('ul');
	const li = document.querySelector(`li:nth-child(${itemNumber})`);

	ul.removeChild(li);
}
// removeItem(1);

function removeItem2(itemNumber) {
	const ul = document.querySelector('ul');
	const li = document.querySelectorAll('li')[itemNumber - 1];

	ul.removeChild(li);
}
// removeItem2(1);

function removeItem3(itemNumber) {
	const li = document.querySelectorAll('li');
	li[itemNumber - 1].remove();
}
// removeItem3(2);

const removeItem4 = (itemNumber) =>
	document.querySelectorAll('li')[itemNumber - 1].remove();
// removeItem4(2);
