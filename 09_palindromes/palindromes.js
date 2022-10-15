const palindromes = function (string) {
	let equal = 0;
	let aux = 0;
	
	for(let i = (string.length - 1); i >= 0; i--) {
	        if(string[i] == string[aux]) {
	            equal++;
	        }
	        aux++;
	}
	    
	if(string.length == equal) {
	     return true;
	} else {
	     return false;
	}
};

// Do not edit below this line
module.exports = palindromes;
