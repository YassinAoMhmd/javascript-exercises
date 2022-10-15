const sumAll = function(left, right) {
	let sum = 0;
	
	for(let i = left; i <= right; i++){
		sum += i;
	}
	
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
