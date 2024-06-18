console.log(100);
console.log(20, 'Hello', true);

const x = 100;
console.log(x);
console.log(x + 10);

// Alert
console.error('alert');

// Warning
console.warn('warn');

// Table
console.table({ Name: 'Surya', Email: 'surya@gmail.com' });

// Group
console.group('simple');
console.error('alert');
console.warn('warn');
console.groupEnd(); // Group Ends

// Adding CSS
const styles = 'padding: 10px; background-color: white; color: green;';
console.log('%cHello World', styles);
