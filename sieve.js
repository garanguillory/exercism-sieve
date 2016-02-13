var Sieve = function(input){

	var isPrime = function(num){
	    for(var i=2; i<= Math.sqrt(num); i++){
	      if(num % i === 0) return false;
	    };
	  return true;
	};

	var primeList = function(amount){
	  var list = [];
	    for(var i=2; i<=amount; i++){
	        if(isPrime(i)){list.push(i)};
	    }
	  return list;
	};

	this.primes = primeList(input);

};


module.exports = Sieve;
