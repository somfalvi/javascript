//correlation is a measure of dependece between statistical variables
//range:-1 to 1;
//0 means the variables are not correlated;
//1 means tge two variables are perfectly related
//-1 means the variables are perfectly related but they are opposites

function phi(table) {
    return(table[3] * table[0] - table[2] * table[1])/
	Math.sqrt((table[2] + table[3]) *
		  (table[0] + table[1]) *
		  (table[1] + table[3]) *
		  (table[0] + table[2]));
}

console.log(phi([76,9,4,1]));
