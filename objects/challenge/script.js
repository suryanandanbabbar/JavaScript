let x;

// Step - 1
const library = [
	{
		title: 'Steve Jobs',
		author: 'Walter Whitman',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
	{
		title: 'Mockingjay',
		author: 'Suzanne Collins',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
	{
		title: 'The Road Ahead',
		author: 'Bill Gates',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
];

// Step - 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step - 3
const { title: firstBook } = library[0];

console.log(firstBook);

// Converting to JSON String
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
