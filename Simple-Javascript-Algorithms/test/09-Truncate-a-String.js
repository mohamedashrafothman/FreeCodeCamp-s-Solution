/*
    - Truncate a string (first argument) if it is longer than the given
	  maximum string length (second argument). Return the truncated
	  string with a ... ending.
	- Note that inserting the three dots to the end will add to the string length.
	- However, if the given maximum string length num is less than or equal
	  to 3, then the addition of the three dots does not add to the string
	  length in determining the truncated string.
	- Tutorial link: https://www.youtube.com/watch?v=GMMGXUaNUXo
*/
const assert = require('assert');

describe('Truncating a String', ()=> {
	it('Truncate a string', ()=> {
		function truncateString(str, num) {
			let splicedStr;

			if (str.length > num) {
				if (num <= 3) {
					str = str.split('');
					splicedStr = str.splice(num);
					str = str.splice(splicedStr);
					str = str.join('') + '...';
					return str;
				} else {
					str = str.split('');
					splicedStr = str.splice(num - 3);
					str = str.splice(splicedStr);
					str = str.join('') + '...';
					return str;
				}

			} else {
				str = str.split('');
				splicedStr = str.splice(num);
				str = str.splice(splicedStr);
				str = str.join('');
				return str;
			}
		}

		assert.equal(truncateString('A-tisket a-tasket A green and yellow basket', 11), 'A-tisket...');
		assert.equal(truncateString('Peter Piper picked a peck of pickled peppers', 14), 'Peter Piper...');
		assert.equal(truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length), 'A-tisket a-tasket A green and yellow basket');
		assert.equal(truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2), 'A-tisket a-tasket A green and yellow basket');
		assert.equal(truncateString('A-', 1), 'A...');
		assert.equal(truncateString('Absolutely Longer', 2), 'Ab...');
	});
});
