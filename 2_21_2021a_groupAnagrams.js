// Group Anagrams
//
// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.
//
// An Anagram is a word or phrase formed by rearranging the letters of a different
// word or phrase, typically using all the original letters exactly once.

var groupAnagrams = function(strs) {
    let sortedLetters = [];
    let strsSort = strs.forEach(x => sortedLetters.push([...x].sort()));
    let hash = {};

    let addToObjArr = (arr, val) =>{
      arr.push(strs[val]);
      return arr;
    }

    for(var i = 0; i < sortedLetters.length; i++){
      if(hash[sortedLetters[i]]) hash[sortedLetters[i]] = addToObjArr(hash[sortedLetters[i]], i);
      else hash[sortedLetters[i]] = [strs[i]];
    }

    return Object.values(hash);
};
