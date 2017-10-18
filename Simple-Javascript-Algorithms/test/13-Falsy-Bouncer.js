/*
	- Remove all falsy values from an array.
	- Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/
const assert = require('assert');

describe('Falsy Bouncer', ()=> {
	it('Removes all flasy values from an array', ()=> {
		function bouncer(arr){
			arr = arr.filter(Boolean);
			return arr;
		}

		assert.deepStrictEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
		assert.deepStrictEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
		assert.deepStrictEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
		assert.deepStrictEqual(bouncer([1, null, NaN, 2, undefined]), [1,2]);
	});
});