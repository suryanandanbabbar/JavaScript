const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
	// className
	// console.log(itemList.className);
	// text.className = 'card dark';

	// classList
	// console.log(itemList.classList); // DOMTokenList(2)

	// itemList.classList.forEach((c) => console.log(c));

	// text.classList.add('dark'); // Add Class
	// text.classList.remove('card'); // Remove Class

	// text.classList.toggle('dark'); // Toggle Class

	// text.classList.replace('card', 'dark'); // Replace Class

	// Change style
	// itemList.style.lineHeight = '4';
	// itemList.style.backgroundColor = 'red';

	items.forEach((item, index) => {
		item.style.color = 'red';

		if (index === 2) {
			item.style.color = 'blue';
		}
	});
}

document.querySelector('button').onclick = run;
