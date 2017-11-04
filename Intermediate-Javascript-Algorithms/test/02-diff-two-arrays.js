/*
    - Compare two arrays and return a new array with any items only found in one of the two given arrays, 
      but not both. In other words, return the symmetric difference of the two arrays.
*/

const assert = require('assert');

describe('Diff Two Arrays', ()=> {
    it('Returns the different elements of two arrays', ()=> {

        function diffArray(arr1, arr2){
            var newArr = arr1.concat(arr2);
            return newArr.filter((item)=> {
                if(arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1){
                    return item;
                }
            });
        };

        assert.deepStrictEqual(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool"]);
        assert.deepStrictEqual(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool", "diorite"]);
        assert.deepStrictEqual(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]), []);
        assert.deepStrictEqual(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4]);
        assert.deepStrictEqual(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]), ["piglet", 4]);
        assert.deepStrictEqual(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]), ["snuffleupagus", "cookie monster", "elmo"]);
    });
});