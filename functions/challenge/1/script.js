// Normal Way
function getCelsius(temp_in_F) {
	const Celsius = ((temp_in_F - 32) * 5) / 9;
	return `Temperature in Celsius: ${Celsius}\xB0C`;
}
console.log(getCelsius(32)); // Temperature in Celsius: 0˚C

// Arrow Function
const celsius = (temp_in_F) => ((temp_in_F - 32) * 5) / 9;

console.log(celsius(32)); // 0
