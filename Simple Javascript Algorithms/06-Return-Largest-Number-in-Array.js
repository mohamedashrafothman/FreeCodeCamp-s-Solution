/*
    - Return an array consisting of the largest number from each provided
	  sub-array. For simplicity, the provided array will contain exactly 4
	  sub-arrays.
    - Remember, you can iterate through an array with a simple for loop,
	  and access each member with array syntax arr[i].
	- Toutorial link:  https://www.youtube.com/watch?v=LeD27i9G9s0
*/


(function(){
	// return largest Number function
	function largestOfFour(arr) {
		let compare = [0,0,0,0];
		for(var i = 0 ; i < arr.length ; i++){
			for(var j = 0; j < arr[i].length ; j++ ){
				if(arr[i][j] > compare[i]){
					compare[i] = arr[i][j];
				}
			}
		}
		return compare;
	}

	// Test
	console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));		// shouldreturn [27,5,39,1001]
	console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));	// shouldreturn [1000000,1001,857,1]

})();
