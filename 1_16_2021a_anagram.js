// Valid Anagram
// Given two strings s and t , write a function to determine if t is an anagram of s.
//
// Example 1:
//
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
//
// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let sArr = s.split('').sort();
    let tArr = t.split('').sort();
    return sArr.every((char, i) => char === tArr[i]);
};

var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let sArr = s.split('').sort().toString();
    let tArr = t.split('').sort().toString();
    return sArr === tArr? true:false;
};

let isAnagram = (s,t) => {
    let hashS = {};
    t = [...t];
    if(s.length !== t.length){
        return false;
    }
    [...s].forEach(x => hashS[x]? hashS[x]++:hashS[x] = 1);
    for(var i = 0; i < t.length; i++){
        if(hashS[t[i]]){
            hashS[t[i]]--;
        }
        else {
            return false;
        }
    }
    return true;
}


var isAnagram = function(s, t) {
    let hashS = {};
    [...s].forEach(x => hashS[x]? hashS[x]++:hashS[x] = 1);
    [...t].forEach(x => hashS[x]? hashS[x]--:hashS[x] = -1);
    return Object.keys(hashS).every(key => hashS[key] === 0);
};
