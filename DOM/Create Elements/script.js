const div = document.createElement('div');

div.className = 'my-element'; // Set the class
div.id = 'my-element'; // Set the id
div.setAttribute('title', 'My Element'); // Set the title

const text = document.createTextNode('Hello World'); // Creating a textNode
div.appendChild(text); // Appending the textNode to div

// document.body.appendChild(div); // Appending the div at the end of the body

document.querySelector('ul').appendChild(div); // Appending the div at the end of the ul
