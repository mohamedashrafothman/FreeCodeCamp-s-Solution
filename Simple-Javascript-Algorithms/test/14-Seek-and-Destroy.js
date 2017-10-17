/*
	- You will be provided with an initial array (the first argument in the destroyer function), 
	  followed by one or more arguments. Remove all elements from the initial array that are of 
	  the same value as these arguments.
*/
const assert = require('assert');

describe('Seek and Destroy', () => {
	it('Removes all elements from first argument that are the same value as secound array', () => {

		function destroyer(arr) {
			var args = Array.from(arguments);
			for (var i = 0; i < args[0].length; i++) {
				for (var j = 0; j < args.length; j++) {
					if (args[0][i] === args[j]) {
						delete args[0][i];
					}
				}
			}
			return args[0].filter(function (x) {
				return (Boolean(x));
			});
		}

		// assert.equal(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1]);
		// assert.equal(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1]);
		// assert.equal(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1]);
		// assert.equal(destroyer([2, 3, 2, 3], 2, 3), []);
	});
});
