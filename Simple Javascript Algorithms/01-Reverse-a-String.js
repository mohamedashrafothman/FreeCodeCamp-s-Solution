/*  - Reverse the provided string.
    - You may need to turn the string into an array before you can reverse it.
    - Your result must be a string.
*/


reverse function
function reverseString(str) {
  str = str.split("").reverse().join("");
  console.log(str);
};


// Test the function
reverseString("hello");						// should return "olleh" string.
reverseString("Howdy");						// should return "ydwoH" string.
reverseString("Greetings from Earth");		// should return "htraE morf sgniteerG" string.
