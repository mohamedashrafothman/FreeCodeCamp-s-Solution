/*
    - Perform a search and replace on the sentence using the arguments provided and return the new sentence.
    - First argument is the sentence to perform the search and replace on.
    - Second argument is the word that you will be replacing (before).
    - Third argument is what you will be replacing the second argument with (after).
    - NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace 
      the word "Book" with the word "dog", it should be replaced as "Dog"
*/
const assert = require('assert');

describe('Search And Replace', () => {
    it('Perform a search and replace on the sentence using the arguments provided and return the new sentence', () => {

        function myReplace(str, before, after) {
            str = str.split(' ');
            var indexOfBefore = str.indexOf(before);
            after.charAt(0).toUpperCase();
            for (var i = 0; i < str.length; i++) {
                if (str[i] === before) {
                    str[i] = after;
                }
            }
            str = str.join(' ');
            return str;
        }

        assert.equal(myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall");
        assert.equal(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is sitting on the couch");
        assert.equal(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error");
        assert.equal(myReplace("His name is Tom", "Tom", "john"), "His name is john");
        assert.equal(myReplace("Let us get back to more Coding", "Coding", "algorithms"), "Let us get back to more algorithms");
    });
});