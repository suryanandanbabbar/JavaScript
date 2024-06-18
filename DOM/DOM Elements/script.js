let result;

// Get child elements
const parent = document.querySelector('.parent');

result = parent.children; // HTMLCollection
result = parent.children[1].innerText; // Child 2
result = parent.children[1].className; // child
result = parent.children[1].nodeName; // DIV

parent.children[1].innerText = 'Child Two'; // Replaces Child 2 to Child Two
parent.children[1].style.color = 'red'; // Changes the color to red

parent.firstElementChild.innerText = 'Child One'; // Replaces Child 1 to Child One
parent.lastElementChild.innerText = 'Child Three'; // Replaces Child 3 to Child Three

// Get parent elements
const child = document.querySelector('.child');
result = child.parentElement;

// Change Style of the Parent
child.parentElement.style.border = '1px solid grey';
child.parentElement.style.padding = '10px';

// Sibling Elements
const secondItem = document.querySelector('.child:nth-child(2)');
result = secondItem; // Child Two
result = secondItem.nextElementSibling; // Child Three

secondItem.nextElementSibling.style.color = 'green'; // Changes the color of 'Child Three' to green
secondItem.previousElementSibling.style.color = 'orange'; // Changes the color of 'Child One' to orange

console.log(result);
