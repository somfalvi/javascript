// find out if starting from the number 1
// and repeatedly either adding 5 or multiplying by 3
// a number can be reached or not


function findout(target) {
    function find(current,history) {
	if (current == target) {
	    return history;
	} else if (current > target) {
	    return null;
	} else {
	    return find(current+5,`(${history} +5)`) || find(current * 3,`(${history}*3)`);
	}
    }
    return find(1,"1");
}

console.log(findout(24));
console.log(findout(2020));
console.log(findout(2100));
