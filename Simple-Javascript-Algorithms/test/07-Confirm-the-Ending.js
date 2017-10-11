/*
    - Check if a string (first argument, str) ends with the given target string
	  (second argument, target).
    - This challenge can be solved with the .endsWith() method, which was
	  introduced in ES2015. But for the purpose of this challenge, we would
	  like you to use one of the JavaScript substring methods instead.
	- Toutorial link:  https://www.youtube.com/watch?v=i7EaxA1gqR8&t=440s
*/
const assert = require('assert');

describe('Confirm the Enging', ()=> {
	it('check if a string end with the given target string', ()=> {
		var confirmEnding = (string, target)=> {
			var checkPoint = string.length - target.length;
			string = string.split('').slice(checkPoint, string.length).join('');
			return(string === target) ? true : false;
		};
		
		assert.equal(confirmEnding('Bastian', 'n'), true);
		assert.equal(confirmEnding('Connor', 'n'), false);
		assert.equal(confirmEnding('Walking on water and developing software from a specification are easy if both are frozen', 'specification'), false);
		assert.equal(confirmEnding('He has to give me a new name', 'name'), true);
		assert.equal(confirmEnding('Open sesame', 'same'), true);
		assert.equal(confirmEnding('Open sesame', 'pen'), false);
		assert.equal(confirmEnding('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain'), false);
	});
});