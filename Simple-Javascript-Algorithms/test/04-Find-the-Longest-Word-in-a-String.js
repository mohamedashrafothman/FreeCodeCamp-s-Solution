/*
	- Return the length of the longest word in the provided sentence.
	- Your response should be a number.
*/
const assert = require('assert');

describe('Check for Polidromes', () => {
	it('Check for the word if it\'s spilt the same way both forward and backward', () => {
		function findLongestWord(string){
			var longestWord = 0;
			string = string.split(' ');
			string.forEach((word)=> {
				if(word.length > longestWord){
					longestWord = word.length;
				}
			});
			return longestWord;
		}

		assert.equal(findLongestWord('The quick brown fox jumped over the lazy dog'), 6);
		assert.equal(findLongestWord('May the force be with you'), 5);
		assert.equal(findLongestWord('Google do a barrel roll'), 6);
		assert.equal(findLongestWord('What is the average airspeed velocity of an unladen swallow'), 8);
		assert.equal(findLongestWord('What if we try a super-long word such as otorhinolaryngology'), 19);
	});
});