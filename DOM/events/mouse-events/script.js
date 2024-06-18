const logo = document.querySelector('h1');

const onClick = () => console.log('click event');
const onDoubleClick = () => {
	if (document.body.style.backgroundColor !== 'purple') {
		document.body.style.backgroundColor = 'purple';
		document.body.style.color = 'white';
	} else {
		document.body.style.backgroundColor = 'white';
		document.body.style.color = 'black';
	}
};
const onRightClick = () => console.log('on right click event');
const onMouseDown = () => console.log('on mouse down event');
const onMouseUp = () => console.log('on mouse up event');
const onMouseWheel = () => console.log('on mouse wheel event');
const onMouseOver = () => console.log('on mouse over event');
const onMouseOut = () => console.log('on mouse out event');
const onDragStart = () => console.log('on drag start event');
const onDrag = () => console.log('on drag event');
const onDragEnd = () => console.log('on drag end event');

// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
