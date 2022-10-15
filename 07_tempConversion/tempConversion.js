const ftoc = function(number) {
	let celsius = 0;
	
	celsius = ((number-32) * (5/9));
	
	let rounded = Math.round(celsius * 10) / 10;
	
	return rounded;
};

const ctof = function(number) {
	let fahrenheit = 0;
	
	fahrenheit = (number * (9/5) + 32);
	
	let rounded = Math.round(fahrenheit * 10) / 10;
	
	return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
