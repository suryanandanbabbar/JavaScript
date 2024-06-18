let output;

output = document.all[11];
output = document.all.length;

output = document.documentElement; // Get all elements in HTML File

output = document.head; // Get Head
output = document.body; // Get Body

output = document.head.children; // Get Elements inside Head
output = document.body.children; // Get Elements inside Body

output = document.doctype; // <!DOCTYPE html>
output = document.URL; // The URL of the website
output = document.characterSet; // UTF-8
output = document.contentType; // text/html

output = document.forms; // Collection of Forms
output = document.forms[0].id; // item-form
output = document.forms[0].method; // get
output = document.forms[0].action; // URL

document.forms[0].id = 'new-id'; // Changing the id

output = document.links; // [] (No links)
output = document.links.href; // undefined (No links)
output = document.links.href = 'https://facebook.com'; // https://facebook.com
// soutput = document.links[0].id = 'facebook-link'; // Set/Change the id name
// output = document.links[0].className = 'facebook-class'; // Set/Change the class name
// output = document.links[0].classList; // List the link with respective class Names

output = document.images;
output = document.images[0];
output = document.images.src;

// console.log(output);
