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

		// assert.equal(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
		// assert.equal(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
		// assert.equal(bouncer([false, null, 0, NaN, undefined, '']), []);
		// assert.equal(bouncer([1, null, NaN, 2, undefined]), [1,2]);
	});
});


// (function(){

// 	function bouncer(arr) {
// 		arr = arr.filter(Boolean);
// 		return arr;
// 	}

// 	// test
// 	// console.log(bouncer([7, "ate", "", false, 9])); 			//should return [7, "ate", 9]
// 	// console.log(bouncer(["a", "b", "c"])); 						//should return ["a", "b", "c"]
// 	// console.log(bouncer([false, null, 0, NaN, undefined, ""])); //should return []
// 	// console.log(bouncer([1, null, NaN, 2, undefined])); 		//should return [1, 2]
// })();