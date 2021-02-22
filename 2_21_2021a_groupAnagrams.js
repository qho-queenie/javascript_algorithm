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

    for(var i = 0; i < sortedLetters.length; i++){
      if(hash[sortedLetters[i]]) hash[sortedLetters[i]].push(strs[i]);
      else hash[sortedLetters[i]] = [strs[i]];
    }

    return Object.values(hash);
};


// Time Complexity: O(NK \log K)O(NKlogK), where NN is the length of strs, and KK 
// is the maximum length of a string in strs. The outer loop has complexity O(N)O(N)
// as we iterate through each string. Then, we sort each string in O(K \log K)O(KlogK) time.
//
// Space Complexity: O(NK)O(NK), the total information content stored in ans.
