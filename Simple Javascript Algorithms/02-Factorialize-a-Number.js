/*
	- Return the factorial of the provided integer.
	- If the integer is represented with the letter n,
	  a factorial is the product of all positive integers
	  less than or equal to n.
	- Factorials are often represented with the shorthand notation n!
	- For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/



/* Factorialize function:
		1- check if the number that passed into function is 0 or anything else
		2- if it is 0 return 1
		3- else return number multiply by the same function with argument minus 1
*/
function factorialize(n){
	switch (n){
		case 0:
			return 1;
		default:
			return n * (factorialize(n - 1));
	}
};


// Test
console.log(factorialize(5));		// should return 120.
console.log(factorialize(10));		// should return 3628800.
console.log(factorialize(20));		// should return 2432902008176640000.
console.log(factorialize(0));		// should return 1.
