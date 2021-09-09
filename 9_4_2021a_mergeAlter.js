// Merge Strings Alternately
// You are given two strings word1 and word2. Merge the strings by adding letters
// in alternating order, starting with word1. If a string is longer than the other,
// append the additional letters onto the end of the merged string.
//
// Example 1:
//
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:
//
// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:
//
// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d
//
// Return the merged string.

// loop between the 2 strings, but need to know when to stop looping, and concat the rest of the longer string
// create an empty string to hold the answer
// find out which string is shorter, and we will stop looping thru the 2 strings there
// append the rest of the longer string, but no need to figure out which is longer since we can append an empty rest of the shorter string
var mergeAlternately = function(word1, word2) {
    let str = '';
    let shorterLen = word1.length > word2.length? word2.length : word1.length;

    for (var i = 0; i < shorterLen; i++){
        str += word1[i] + word2[i];
    }

    //str += word1.slice(i,word1Len) +  word2.slice(i, word2Len);
    // if 2nd paramenter is missing in slice, it will slice till the end
    // even if w1 is shorter and has already ended, we are merely appending an empty string, doesnt matter
    str += word1.slice(i) +  word2.slice(i);

    return str;
};

// using a while loop:
// keep appending to the str until one of them is out of letters
let mergeAlternately = function(w1, w2) {
    let str = '';
    let i = 0;

    while(w1[i] && w2[i]){
        str += w1[i] + w2[i];
        i++;
    }
    str += w1.slice(i, w1.length) +  w2.slice(i, w2.length);
    return str;
}
