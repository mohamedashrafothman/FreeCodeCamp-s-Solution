/*
    - Check if a string (first argument, str) ends with the given target string
	  (second argument, target).
    - This challenge can be solved with the .endsWith() method, which was
	  introduced in ES2015. But for the purpose of this challenge, we would
	  like you to use one of the JavaScript substring methods instead.
	- Toutorial link:  https://www.youtube.com/watch?v=i7EaxA1gqR8&t=440s
*/


(function(){
	// Ending confirmation function
	function confirmEnding(str, target) {
		const checkPoint = str.length - target.length;
		str = str.split("").splice(checkPoint, str.length).join('');
		// return str;
		if(str === target){
			return true;
		} else {
			return false;
		}
	}

	// Test
	console.log(confirmEnding("Bastian", "n"));				//should return true
	console.log(confirmEnding("Connor", "n"));				//should return flase
	console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
															//should return flase
	console.log(confirmEnding("He has to give me a new name", "name"));
															//should return true
	console.log(confirmEnding("Open sesame", "same"));		//should return true
	console.log(confirmEnding("Open sesame", "pen"));		//should return flase
	console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
															//should return flase

})();
