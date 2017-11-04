/*  - Sum All Numbers In a Range.
		- We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
		- The lowest number will not always come first.
*/
const assert = require('assert');

describe('Summ All Numbers In a Range', ()=> {
    it('returns the sum of all numbers in a range between the first and last array\'s elements', ()=> {
        function sumAll(arr){
            const min = Math.min(arr[0], arr[1]);
            const max = Math.max(arr[0], arr[1]);
            let sum = 0;
            for(let i = min ; i <= max ; i++){
                sum += i;
            }
            return sum;
        };

        assert.equal(sumAll([1, 4]), 10);
        assert.equal(sumAll([4, 1]), 10);
        assert.equal(sumAll([5, 10]), 45);
        assert.equal(sumAll([10, 5]), 45);
    });
});