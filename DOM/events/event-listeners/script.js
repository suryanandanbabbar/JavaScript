const clearBtn = document.querySelector('#clear');

function onClear() {
	const itemList = document.querySelector('ul');
	const items = itemList.querySelectorAll('li');

	// items.forEach((item) => item.remove());

	// itemList.innerHTML = '';

	while (itemList.firstChild) {
		itemList.removeChild(itemList.firstChild);
	}
}

// Event Listeners
// clearBtn.onclick = function () {
// 	alert('Clear Items');
// };

// Most Modern Way
// addEventListener()
// clearBtn.addEventListener('click', function () {
// 	alert('Clear Items');
// });
// clearBtn.addEventListener('click', function () {
// 	console.log('Clear Items');
// });
clearBtn.addEventListener('click', onClear);

// removeEventListener()
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000); // Wait for 5s
