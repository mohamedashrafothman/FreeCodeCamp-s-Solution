/*
    - Repeat a given string (first argument) num times (second argument).
	  Return an empty string if num is not a positive number.
*/


(function(){
	// Repeat String function
	function repeatStringNumTimes(str, num) {
		var answerStr = "";
		while(num > 0){
			answerStr +=str;
			num--;
		}
		return answerStr;
	}

	// Test
	console.log(repeatStringNumTimes('*',3));		//should return ***
	console.log(repeatStringNumTimes('abc',3));		//should return abcabcabc
	console.log(repeatStringNumTimes('abc',4));		//should return abcabcacbabc
	console.log(repeatStringNumTimes('abc',1));		//should return abc
	console.log(repeatStringNumTimes('*',8));		//should return ********
	console.log(repeatStringNumTimes('abc',-2));	//should return ""


})();
