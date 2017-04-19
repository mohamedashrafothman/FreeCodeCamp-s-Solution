/*
    - Truncate a string (first argument) if it is longer than the given
	  maximum string length (second argument). Return the truncated
	  string with a ... ending.
	- Note that inserting the three dots to the end will add to the string length.
	- However, if the given maximum string length num is less than or equal
	  to 3, then the addition of the three dots does not add to the string
	  length in determining the truncated string.
	- Tutorial link: https://www.youtube.com/watch?v=GMMGXUaNUXo
*/


(function(){
	// Truncate a string function
	function truncateString(str, num){
		let splicedStr;

		if(str.length > num){
			if(num <= 3){
				str = str.split('');
				splicedStr = str.splice(num);
				str = str.splice(splicedStr);
				str = str.join('') + '...';
				return str;
			} else {
				str = str.split('');
				splicedStr = str.splice(num-3);
				str = str.splice(splicedStr);
				str = str.join('') + '...';
				return str;
			}

		} else {
			str = str.split('');
			splicedStr = str.splice(num);
			str = str.splice(splicedStr);
			str = str.join('');
			return str;
		}
	}

	// Test
	console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));			//should return "A-tisket..."
	console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));		//should return "Peter Piper..."
	console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));		
																							//should return "A-tisket a-tasket A green and yellow basket"
	console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));		
																							//should return "A-tisket a-tasket A green and yellow basket"
	console.log(truncateString("A-", 1));													//should return "A..."
	console.log(truncateString("Absolutely Longer", 2));									//should return "Ab..."


})();
