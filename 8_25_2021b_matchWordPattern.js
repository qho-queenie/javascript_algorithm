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


// no need to keep track of positions purposely, i can do this for us on the go

let wordPattern = (pattern, s) => {
    let sArr = s.split(' ');
    let patternArr = pattern.split('');
    let uniquesMap = new Map();

    if(sArr.length !== patternArr.length) return false;

    // this helps if the same value is mapped to different key in uniquesMap
    if(new Set(patternArr).size !== new Set(sArr).size) return false;

    for(var i = 0; i < patternArr.length; i++){
        if(!uniquesMap.has(patternArr[i])){
            uniquesMap.set(patternArr[i], sArr[i]);
        }
        else {
            if(uniquesMap.get(patternArr[i]) !== sArr[i]){
                return false;
            }
        }
    }
    return true;
}
