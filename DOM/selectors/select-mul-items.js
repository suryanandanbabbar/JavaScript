// querySelectorAll()

const listItems = document.querySelectorAll('.item');
console.log(listItems); // NodeList
console.log(listItems[1].innerText); // Orange Juice

// listItems.style.color = 'red'; // error
// listItems[1].style.color = 'red';

// listItems.forEach((item, index) => {
// 	item.style.color = 'red';

// 	if (index === 1) {
// 		item.remove(); // Orange Juice is removed
// 	}
// 	if (index === 0) {
// 		item.innerText = 'Oranges'; // 'Apple' is changed to 'Oranges'
// 	}
// });

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2); // HTMLCollection

console.log(listItems2[2].innerText); // Oreos

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
	console.log(item.innerText);
});

// getElementsByTagName

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText); // Apples
