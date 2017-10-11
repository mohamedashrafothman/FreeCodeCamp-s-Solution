/*
    - Repeat a given string (first argument) num times (second argument).
	  Return an empty string if num is not a positive number.
*/
const assert = require('assert');

describe('Repeat a String', () => {
	it('Repeat a given string num times', () => {
		function repeatStringNumTimes(str, num) {
			var answerStr = '';
			while (num > 0) {
				answerStr += str;
				num--;
			}
			return answerStr;
		}

		assert.equal(repeatStringNumTimes('abc', 3), 'abcabcabc');
		assert.equal(repeatStringNumTimes('*', 3), '***');
		assert.equal(repeatStringNumTimes('abc', 4), 'abcabcabcabc');
		assert.equal(repeatStringNumTimes('abc', 1), 'abc');
		assert.equal(repeatStringNumTimes('*', 8), '********');
		assert.equal(repeatStringNumTimes('abc', -2), '');

	});
});