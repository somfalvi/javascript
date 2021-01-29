// countBs takes a string as its only argument and returns
// a number that indicates how many uppercase B characters there are in a string

function countBs(mystring) {
    return countChar(mystring,"B");
}

//function takes a second argument that indicates the character to be counted
function countChar(mystring, character) {
    counter = 0;
    for(let i = 0; i < mystring.length; i++) {
	if (mystring[i] == character) {
	    counter++;
	}
    }
    return counter;
}

console.log(countBs("Bobby Banana"));


