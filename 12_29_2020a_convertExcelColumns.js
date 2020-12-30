// Excel Sheet Column Number
// Given a column title as appear in an Excel sheet, return its corresponding column number.
//
// For example:
//
//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28
//     ...
// Example 1:
//
// Input: "A"
// Output: 1
// Example 2:
//
// Input: "AB"
// Output: 28
// Example 3:
//
// Input: "ZY"
// Output: 701
//
//
// Constraints:
//
// 1 <= s.length <= 7
// s consists only of uppercase English letters.
// s is between "A" and "FXSHRXW".

var titleToNumber = function(s) {
    let alphabet = [...Array(26).keys()].map(i=> String.fromCharCode(i + 65));
    alphabet.unshift(0)

    let result = 0;
    for(var i = 0; i < [...s].length; i++){
        result += alphabet.indexOf(s[i]) * Math.pow(26, s.length - 1 - i);
    }
    return result;
};

var titleToNumber = function(s) {
    let result = 0;
    for(var i = 0; i < [...s].length; i++){
        result += (s.charCodeAt(i) - 64) * Math.pow(26, s.length - 1 - i);
    }
    return result;
};
