/*
	- Return true if the given string is a palindrome. Otherwise, return false.
	- A palindrome is a word or sentence that's spelled the same way both forward
	  and backward, ignoring punctuation, case, and spacing.
	- Note: You'll need to remove all non-alphanumeric characters
	  (punctuation, spaces and symbols) and turn everything lower case in order
	  to check for palindromes.
	- We'll pass strings with varying formats, such as "racecar", "RaceCar", and
	  "race CAR" among others.
	- We'll also pass strings with special symbols, such as "2A3*3a2",
	  "2A3 3a2", and "2_A3*3#A2".
*/
const assert = require('assert');

describe('Check for Polidromes', ()=> {
	it('Check for the word if it\'s spilt the same way both forward and backward', ()=> {
		function palindrome(string){
			string = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
			var reverseString = string.split('').reverse().join('');
			return (string === reverseString) ? true : false;
		}

		assert.equal(palindrome('eye'), true);
		assert.equal(palindrome('_eye'), true);
		assert.equal(palindrome('race car'), true);
		assert.equal(palindrome('not a palindrome'), false);
		assert.equal(palindrome('A man, a plan, a canal. Panama'), true);
		assert.equal(palindrome('never odd or even'), true);
		assert.equal(palindrome('nope'), false);
		assert.equal(palindrome('almostomla'),false);
		assert.equal(palindrome('My age is 0, 0 si ega ym.'), true);
		assert.equal(palindrome('1 eye for of 1 eye.'), false);
		assert.equal(palindrome('0_0 (: /-\ :) 0-0'), true);
		assert.equal(palindrome('five|\_/|four'), false);
	});
});