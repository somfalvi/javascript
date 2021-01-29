//determine recursively if number is even or odd
//one is odd
//zero is even
//otherwise evenness is the same as N-2

function recursiveEven(n) {
    if (n<0){
	return recursiveEven(-n);
    }
    if (n == 1) {
	return false;
    } else if (n == 0) {
	return true;
    } else {
	return recursiveEven(n-2);
    }
}
console.log(recursiveEven(200));
console.log(recursiveEven(17));
console.log(recursiveEven(-5));	    
