// NodeList includes diff types of nodes like text, comment, div
// *Whitespace/NewLine accounts as Text Node*
let result;

const parent = document.querySelector('.parent');

result = parent.childNodes; // NodeList
result = parent.childNodes[0]; // #text (Whitespace)
result = parent.childNodes[0].textContent; //  (Whitespace)
result = parent.childNodes[0].nodeName; // #text

result = parent.childNodes[3].nodeName; // DIV
result = parent.childNodes[3].textContent; // Child 1
result = parent.childNodes[3].outerHTML; // <div class='child'>Child 1</div>
result = parent.childNodes[3].innerText = 'Child One'; // Replace the text from Child 1 to Child One

result = parent.childNodes[5].style.color = 'red'; // Changes the color to red of Child 2

result = parent.firstChild; // #text
result = parent.lastChild.textContent = 'hello'; // hello

// Parent node
const child = document.querySelector('.child');

result = child.parentNode; // <div class='parent'>..</div>
result = child.parentElement; // <div class='parent'>..</div>

child.parentNode.style.backgroundColor = 'grey';
child.parentNode.style.padding = '10px';

// Siblings
const secondItem = document.querySelector('.child:nth-child(2');

result = secondItem.nextSibling; // #text (whitespace)
result = secondItem.previousSibling; // #text (whitespace)

console.log(result);
