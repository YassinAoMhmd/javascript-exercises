const removeFromArray = function(cars,position) {
	const result = [];
	let j=0;
	
	for(let i=0; i < cars.length; i++){
		if(i != (position-1)){
			result[j] = cars[i];
			j++;	
		}
	}
	
	return result;

};

// Do not edit below this line
module.exports = removeFromArray;
