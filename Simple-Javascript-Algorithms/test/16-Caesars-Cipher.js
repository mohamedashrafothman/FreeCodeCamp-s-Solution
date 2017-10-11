/*
	- One of the simplest and most widely known ciphers is a Caesar cipher, also known as 
	  a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
	- A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
	  Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
	- Write a function which takes a ROT13 encoded string as input and returns a decoded string.
	- All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
	  but do pass them on.
*/

(function(){

	function rot13(str) { // LBH QVQ VG!
		var new_str = "";
		for(i=0; i<str.length; i++){
	    	var code = str[i].charCodeAt();
	    	if(code<65 || code>90){
	      		new_str+=str[i];
	    	}else if(code<=77){
	      		new_str+=String.fromCharCode(code+13);
	    	}else{
	      		new_str+=String.fromCharCode(code-13);
	    	}
	  	}
	  	return new_str;
	}

	// test
	// console.log(rot13("SERR PBQR PNZC")); 									//should return "FREE CODE CAMP"
	// console.log(rot13("SERR CVMMN!")); 										//should return "FREE PIZZA!"
	// console.log(rot13("SERR YBIR?")); 										//should return "FREE LOVE?"
	// console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")); 	//should return "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

})();