/*
	- Return the lowest index at which a value (second argument) should be inserted 
	  into an array (first argument) once it has been sorted. 
	  The returned value should be a number.
	- For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is 
	  greater than 1 (index 0), but less than 2 (index 1).
	- Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array 
	  has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) 
	  and greater than 5 (index 1).
*/
const assert = require('assert');

describe('Where Do I Beloong', () => {
	it('Returns the lowest index at whitch a value should be into the first argument once it has been sorted', () => {
		function getIndexToIns(arr, num) {
			arr.push(num);
			arr.sort(function (a, b) {
				return a - b;
			});
			return arr.indexOf(num);
		}

		assert.equal(getIndexToIns([10, 20, 30, 40, 50], 35), 3);
		assert.equal(getIndexToIns([10, 20, 30, 40, 50], 30), 2);
		assert.equal(getIndexToIns([40, 60], 50), 1);
		assert.equal(getIndexToIns([3, 10, 5], 3), 0);
		assert.equal(getIndexToIns([5, 3, 20, 3], 5), 2);
		assert.equal(getIndexToIns([2, 20, 10], 19), 2);
		assert.equal(getIndexToIns([2, 5, 10], 15), 3);
	});
});