const add = function(number1, number2) {
	let sum = number1 + number2;
	
	return sum;	
};

const subtract = function(number1, number2) {
	let resta = number1 - number2;
	
	return resta;
};

const sum = function(array) {
	let sum = 0;
	
	for(let i=0; i < array.length; i++){
		sum += array[i];
	}
	
	return sum;		
};

const multiply = function(array) {
	let mult = 1;
	
	for(let i=0; i < array.length; i++){
		mult *= array[i];
	}
	
	return mult;	
};

const power = function(number1, number2) {
	let pow =1;
	
	for(let i = 0; i < number2; i++){
		pow *= number1;
	}
	
	return pow;	
};

const factorial = function(number) {
	let fact = 1;
	
	for(let i = 1; i <= number; i++){
		fact *= i;
	}
	
	return fact;	
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
