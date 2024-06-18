let x;

const num = new Number(5.4527);

x = num.toString(); // 5.4527

x = num.toString().length; // 6

x = num.toFixed(2); // 5.45

x = num.toPrecision(2); // 5.5 (2 Digits)

x = num.toExponential(2); // 5.45e+0

x = num.toLocaleString('en-IN'); // 5.453

x = num.valueOf(); // 5.4527 (Just gives back the actual value)

x = Number.MAX_VALUE; // Max Value that can be in Number data type
x = Number.MIN_VALUE; // Min Value that can be in Number data type

console.log(x);
