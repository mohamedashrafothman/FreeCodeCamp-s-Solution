/*
    - Return the provided string with the first letter of each word capitalized. Make
	  sure the rest of the word is in lower case.
    - For the purpose of this exercise, you should also capitalize connecting
      words like "the" and "of".
	- Toutorial link:  https://www.youtube.com/watch?v=DdjA8sRN9og
*/


// Title Case function
(function (){
	function titleCase(str, answer=[]){
		str = str.toLowerCase().split(' ');
		for(var word in str){
			answer[word] = capitalize(str[word]);
		}
		return answer.join(' ');
	}

	// capitalize function
	function capitalize(x){
		var originalLetter = x.charAt(0);
		var capitalLetter = originalLetter.toUpperCase();
		x = x.replace(originalLetter, capitalLetter);
		return x;
	}


	// Test
	console.log(titleCase("I'm a little tea pot")); 				// should return "I'm A Little Tea Pot"
	console.log(titleCase("sHoRt AnD sToUt"));						// should return "Short And Stout"
	console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));	// should return "Here Is My Handle Here Is My Spout"

})();
