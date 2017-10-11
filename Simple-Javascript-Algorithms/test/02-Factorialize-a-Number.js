/*
	- Return the factorial of the provided integer.
	- If the integer is represented with the letter n,
	  a factorial is the product of all positive integers
	  less than or equal to n.
	- Factorials are often represented with the shorthand notation n!
	- For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/
const assert = require('assert');

describe('Factorize a Number', ()=> {
	it('Takes a number and return it\'s factorial', ()=> {
		function factorialize(number){
			if(number === 0 || number === 1){
				return 1;
			} else {
				return number * factorialize(number-1);
			}
		}

		assert.equal(factorialize(5), 120);
		assert.equal(factorialize(10), 3628800);
		assert.equal(factorialize(20), 2432902008176640000);
		assert.equal(factorialize(0), 1);
	});
});