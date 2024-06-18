// Waiting for the whole page to load
window.onload = function () {
	document.querySelector('h1').textContent = 'Hello world';
};

window.addEventListener('resize', () => {
	document.querySelector(
		'h1'
	).textContent = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

window.addEventListener('scroll', () => {
	console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);
});
