// Word Pattern
//
// Given a pattern and a string s, find if s follows the same pattern.
//
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
//
// Example 1:
//
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:
//
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:
//
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
// Example 4:
//
// Input: pattern = "abba", s = "dog dog dog dog"
// Output: false

let wordPattern = (pattern, s) => {
    let sArr = s.split(' ');
    let patternArr = pattern.split('');

    if(sArr.length !== patternArr.length) return false;

    let patternArrValues = Object.values(numArr(patternArr));
    let sArrValues = Object.values(numArr(sArr));

    if(patternArrValues.length !== sArrValues.length) return false;

    for(var i = 0; i < patternArrValues.length; i++) {
        for(var j = 0; j < patternArrValues[i].length; j++) {
            if(patternArrValues[i][j] !== sArrValues[i][j]){
                return false;
            }
        }
    }
    return true;
}

let numArr = arrWords => {
    let hash = {};
    arrWords.forEach((x, i) => hash[x]? hash[x].push(i):hash[x] = [i]);
    return hash;
}
