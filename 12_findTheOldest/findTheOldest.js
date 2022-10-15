const findTheOldest = function(people) {
	let mayor = 0;
  let oldest = [];
	
	people.reduce((ant, desp) => {
	
	if ((desp.yearOfDeath - desp.yearOfBirth) > mayor) {
   		mayor = desp.yearOfDeath - desp.yearOfBirth;
     	 	oldest = desp;
    	}
    	
    	return ant;
  	
  	})
  
  	return oldest;	
};


// Do not edit below this line
module.exports = findTheOldest;
