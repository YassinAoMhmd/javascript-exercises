const fibonacci = function(number) {
	let aux = 0;
	let x = 0;
  	let y = 1;

  	if (number == 0) {
  		return 0;
  	}	
  
  	for (let i = 1; i < number; i++) {
    		aux = y;
    
    		y = x + y;
    		x = aux;
  	}
  	
  	return y;
};

// Do not edit below this line
module.exports = fibonacci;
