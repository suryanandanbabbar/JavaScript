let x;
let d = new Date(); // Making Date Object

x = d.toString(); // Converts to String

x = d.getTime(); // Present Time in ms
x = d.valueOf(); // Present Time in ms

x = d.getFullYear(); // Year

x = d.getMonth() + 1; // Month

x = d.getDate(); // Day of the Month

x = d.getDay(); // Day of the Week

x = d.getHours(); // Hour

x = d.getMinutes(); // Minutes

x = d.getMilliseconds(); // Milliseconds

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-IN').format(d); // IN stands for India
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d); // October

x = d.toLocaleString('default', { month: 'short' }); // Oct

x = d.toLocaleString('default', {
	weekday: 'long',
	Iyear: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
	timeZone: 'Asia/Kolkata',
});

console.log(x);
