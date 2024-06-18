// Top Most Global Object = Window
console.log(window);

// In Window, we have 'document' object
console.log(window.document);
console.dir(window.document);

// Getting the body element
console.log(document.body);
console.log(document.body.innerHTML); // Elements inside body tag
console.log(document.body.innerText); // Text inside body tag

// Access the links
console.log(document.links[0]); // Indexing like in Arrays

// document.body.innerHTML = '<h1>Hello World</h1>'; // Replaces the old h1 tag

document.write('Hello From JS'); // Puts at the end of file

console.log(document.getElementById('main')); // Get the element with id
const main = document.getElementById('main');
main.innerHTML = '<h2>Hello from Main</h2> '; // Replace

document.querySelector('#main h2').innerText = 'Hello'; // Hello
