/*
    - Return the provided string with the first letter of each word capitalized. Make
	  sure the rest of the word is in lower case.
    - For the purpose of this exercise, you should also capitalize connecting
      words like "the" and "of".
	- Toutorial link:  https://www.youtube.com/watch?v=DdjA8sRN9og
*/
const assert = require('assert');

describe('Title Case a Sentence', ()=> {
	it('Capetalize the first letter of the word', ()=> {
		function titleCase(string){
			return string.replace(/\w\S*/g, (txt)=> {
				return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
			});
		}
		
		assert.equal(titleCase('I\'m a little tea pot'), 'I\'m A Little Tea Pot');
		assert.equal(titleCase('sHoRt AnD sToUt'), 'Short And Stout');
		assert.equal(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'), 'Here Is My Handle Here Is My Spout');
	});
});