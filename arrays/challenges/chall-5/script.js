const words = ['coder', 'programmer', 'developer'];

const capitalizeWords = words.map((word) => {
	return word[0].toUpperCase() + word.slice(1);
});

console.log(capitalizeWords);
