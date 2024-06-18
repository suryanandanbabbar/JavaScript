// document.getElementById()
console.log(document.getElementById('app-title')); // Gets the whole h1 tag
console.log(document.getElementById('app-title').id); // app-title
console.log(document.getElementById('app-title').className); // Nothing will print as there is no class

// Get Attributes
console.log(document.getElementById('app-title').getAttribute('id')); // app-title

// Set Attributes
document.getElementById('app-title').title = 'Shopping List'; // Hover over the Shopping List you will see the title
document.getElementById('app-title').setAttribute('class', 'title'); // Sets the class to 'title' having id 'app-title'

const title = document.getElementById('app-title');

// Get/change content
console.log(title.textContent); // Shopping List
title.textContent = 'Hello World'; // Change element's text
title.innerText = 'Hello Again'; // Same as above
title.innerHTML = '<strong>Shopping List</strong>';

// Change Styles
// title.style.color = 'red'; // Change color to red
// title.style.backgroundColor = 'black'; // Change background-color to black
// title.style.padding = '10px'; // Sets padding to 10px
// title.style.borderRadius = '10px'; // Sets border-radius to 10px

// docuemnt.querySelector()
console.log(document.querySelector('h1')); // shows the first h1 tag with all attributes
console.log(document.querySelector('#app-title')); // shows the h1 tag with id
console.log(document.querySelector('.container')); // shows the div with class
console.log(document.querySelector('input[type="text"]')); // takes input
console.log(document.querySelector('li:nth-child(2')); // 2 list element

// const secondItem = document.querySelector('li:nth-child(2)');
// secondItem.innerText = 'Apple juice';
// secondItem.style.color = 'red';

// // Use these methods on other elements
// const list = document.querySelector('ul');
// console.log(list);
// const firstItem = list.querySelector('li');
// firstItem.style.color = 'blue';
