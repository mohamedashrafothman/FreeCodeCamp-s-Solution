/*
	- Return true if the string in the first element of the array contains 
	  all of the letters of the string in the second element of the array.
	- For example, ["hello", "Hello"], should return true because all of the 
	  letters in the second string are present in the first, ignoring case.
	- The arguments ["hello", "hey"] should return false because the string 
	  "hello" does not contain a "y".
	- Lastly, ["Alien", "line"], should return true because all of the letters 
	  in "line" are present in "Alien".
*/

const assert = require('assert');

describe('Multations', ()=> {
	it('returns true if string in the first element of the array containes all of the letter in the secound argument', ()=> {

		function mutation(arr) {
			arr.sort(function (a, b) {
				return a.length - b.length;
			});

			return arr[0].toLowerCase().split('').every(function (x) {
				if (arr[1].toLowerCase().indexOf(x) === -1) {
					return false;
				} else {
					return true;
				}
			});
		}

		assert.equal(mutation(['hello', 'hey']), false);
		assert.equal(mutation(['hello', 'Hello']), true);
		assert.equal(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']), true);
		assert.equal(mutation(['Mary', 'Army']), true);
		assert.equal(mutation(['Mary', 'Aarmy']), true);
		assert.equal(mutation(['Alien', 'line']), true);
		assert.equal(mutation(['floor', 'for']), true);
		assert.equal(mutation(['hello', 'neo']), false);
		assert.equal(mutation(['voodoo', 'no']), false);
	});
});