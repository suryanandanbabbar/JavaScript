const socials = ['twitter', 'linkedin', 'instagram', 'facebook'];

// socials.forEach(function (item) {
// 	console.log(item);
// });

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

function logSocials(social) {
	console.log(social);
}
socials.forEach(logSocials);

const socialObjects = [
	{ name: 'Twitter', url: 'https://twitter.com' },
	{ name: 'Facebook', url: 'https://facebook.com' },
	{ name: 'Instagram', url: 'https://instagram.com' },
	{ name: 'Linkedin', url: 'https://linkedin.com' },
];
socialObjects.forEach((item) => console.log(item.url));
