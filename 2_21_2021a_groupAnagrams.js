// Group Anagrams
//
// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.
//
// An Anagram is a word or phrase formed by rearranging the letters of a different
// word or phrase, typically using all the original letters exactly once.

// Time Complexity: O(NK log K), where N is the length of strs, and K
// is the maximum length of a string in strs. The outer loop has complexity O(N)
// as we iterate through each string. Then, we sort each string in O(KlogK) time.
// Space Complexity: O(NK), the total information content stored in ans

var groupAnagrams = function(strs) {
    let sortedLetters = [];
    let strsSort = strs.forEach(x => sortedLetters.push([...x].sort()));
    let hash = {};

    for(var i = 0; i < sortedLetters.length; i++){
      if(hash[sortedLetters[i]]) hash[sortedLetters[i]].push(strs[i]);
      else hash[sortedLetters[i]] = [strs[i]];
    }

    return Object.values(hash);
};



// we dont need 2 loops since we dont wanna mess with the original order anyways
// therefore we can sort each letter and put each of them in the hash table in the same loop
var groupAnagrams = function(strs) {
    let hash = {};
    for(str of strs) {
        let strsSort = str.split('').sort().join('');
        hash[strsSort]? hash[strsSort].push(str):hash[strsSort] = [str];
    }

    return Object.values(hash);
};
