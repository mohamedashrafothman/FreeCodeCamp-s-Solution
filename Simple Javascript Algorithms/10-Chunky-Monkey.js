/*
    - Write a function that splits an array (first argument) into groups the length 
      of size (second argument) and returns them as a two-dimensional array.
*/

(function(){

	function chunkArrayInGroups(arr, size) {
	    // Break it up.
	    var newArr = [];
	    //get the total array items
	    var totalArrayLength = arr.length;
		for ( var i = 0; i < totalArrayLength; i++ ) {
		    //build a new array with the spliced array 
		    newArr.push( arr.splice( 0, size ) );
		    //check if there are any extra empty arrays
		    //if there are, delete them
		    if ( newArr[i].length <= 0 ) {
		      delete newArr[i];
		    }
	    }
	  
	  return newArr;
	}


	// Test
	console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
	console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
	console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
	console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
	console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
	console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));


})();