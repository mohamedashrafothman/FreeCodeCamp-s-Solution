/*
	- Write a function that splits an array (first argument) into groups the length
	  of size (second argument) and returns them as a two-dimensional array.
*/
const assert = require('assert');

describe('Chunk Monkey', () => {
	it('Splits an array into groups of the length of size and return them as a two-dimensional array.', () => {
		function chunkArrayInGroups(arr, size) {
			var newArr = [];
			for (var i = 0; i <= arr.length; i++) {
				newArr.push(arr.splice(0, size));
				if (newArr[i].length <= 0) {
					delete newArr[i];
				}
			}
			return newArr;
		}

		assert.deepStrictEqual(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2), [
			['a', 'b'],
			['c', 'd']
		]);
		assert.deepStrictEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [
			[0, 1, 2],
			[3, 4, 5]
		]);
		assert.deepStrictEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [
			[0, 1],
			[2, 3],
			[4, 5]
		]);
		assert.deepStrictEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [
			[0, 1, 2, 3],
			[4, 5]
		]);
		assert.deepStrictEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [
			[0, 1, 2],
			[3, 4, 5]
		]);
		assert.deepStrictEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [
			[0, 1, 2, 3],
			[4, 5, 6, 7]
		]);
	});
});