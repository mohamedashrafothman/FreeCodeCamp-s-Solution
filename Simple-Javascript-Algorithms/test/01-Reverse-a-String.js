/*  - Reverse the provided string.
		- You may need to turn the string into an array before you can reverse it.
		- Your result must be a string.
*/
const assert = require('assert');

describe('Reverse a String', ()=>{
	it('Takes a string and reverse it', ()=>{
		function reverseString(str) {
			str = str.split('').reverse().join('');
			return str;
		}

		assert.equal(reverseString('hello'), 'olleh');
		assert.equal(reverseString('Howdy'), 'ydwoH');
		assert.equal(reverseString('Greetings from Earth'), 'htraE morf sgniteerG');
	});
});