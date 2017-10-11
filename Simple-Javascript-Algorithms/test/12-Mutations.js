/*
	- Return true if the string in the first element of the array contains 
	  all of the letters of the string in the second element of the array.
	- For example, ["hello", "Hello"], should return true because all of the 
	  letters in the second string are present in the first, ignoring case.
	- The arguments ["hello", "hey"] should return false because the string 
	  "hello" does not contain a "y".
	- Lastly, ["Alien", "line"], should return true because all of the letters 
	  in "line" are present in "Alien".
*/

(function(){

	function mutation(arr) {
	  arr.sort(function(a,b){
	    return a.length - b.length;
	  });
	  
	  return arr[0].toLowerCase().split("").every(function(x){
	    if(arr[1].toLowerCase().indexOf(x) === -1){
	      return false;
	    } else {
	      return true;
	    }
	  });
	}

	// test
	// console.log(mutation(["hello", "hey"]));
	// console.log(mutation(["hello", "Hello"]));
	// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
	// console.log(mutation(["Mary", "Army"]));
	// console.log(mutation(["Mary", "Aarmy"]));
	// console.log(mutation(["Alien", "line"]));
	// console.log(mutation(["floor", "for"]));
	// console.log(mutation(["hello", "neo"]));
	// console.log(mutation(["voodoo", "no"]));

})();