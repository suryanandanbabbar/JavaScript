// insertAdjacentElement
function insertElement() {
	const filter = document.querySelector('.filter');

	const h1 = document.createElement('h1');
	h1.textContent = 'insertAdjacentElement';

	filter.insertAdjacentElement('beforebegin', h1);
}
insertElement();

// insertAdjacentText
function insertText() {
	const item = document.querySelector('li:first-child');

	item.insertAdjacentText('afterend', 'insertAdjacentText');
}
insertText();

// insertAdjacentHTML
function insertHTML() {
	const clearBtn = document.querySelector('#clear');

	clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>');
}
insertHTML();

// insertBefore
function insertBeforeItem() {
	const ul = document.querySelector('ul');

	const li = document.createElement('li');
	li.textContent = 'insertBefore';

	const thirdItem = document.querySelector('li:nth-child(3)');

	ul.insertBefore(li, thirdItem);
}
insertBeforeItem();

/* 
<!-- before begin -->
<p>
    <!-- after begin -->
    foo
    <!-- beforeend -->
</p>
<!-- after end -->
*/
