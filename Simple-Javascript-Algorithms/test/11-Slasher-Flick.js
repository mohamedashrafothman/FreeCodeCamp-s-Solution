/*
	- Return the remaining elements of an array after chopping off n elements from the head.
	-The head means the beginning of the array, or the zeroth index.

*/
const assert = require('assert');

describe('Slasher Flick', ()=> {
	it('Returns the remaining elements of an array after chopping off n elements from the head', ()=> {
		function slasher(arr, howMany){
			arr = arr.splice(0, howMany);
			return arr;
		}
		assert.deepStrictEqual(slasher([1,2,3,4,5,6,7,8,9], 2), [ 1 ,2 ]);
		assert.deepStrictEqual(slasher([1, 2, 3], 0), []);
	});
});























// (function(){
// 	function slasher(arr, howMany) {
// 	   var spliced = arr.splice(0, howMany);
// 	   return arr;
// 	}

// 	//test
// 	// console.log(slasher([1, 2, 3], 2));
// 	// console.log(slasher([1, 2, 3], 0));
// 	// console.log(slasher([1, 2, 3], 9));
// 	// console.log(slasher([1, 2, 3], 4));
// 	// console.log(slasher(["burgers", "fries", "shake"], 1));
// 	// console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));

// })();