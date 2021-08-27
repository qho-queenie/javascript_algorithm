// Longest Palindrome
// Given a string s which consists of lowercase or uppercase letters, return the
// length of the longest palindrome that can be built with those letters.
//
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
//
//
//
// Example 1:
//
// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:
// 
// Input: s = "a"
// Output: 1
// Example 3:
//
// Input: s = "bb"
// Output: 2

let longestPalindrome = s => {
    if(s.length < 2) return s.length;
    let countMap = {};
    s = [...s];
    let oddCounts = [];
    let evenTotal = 0;
    let sum = 0;

    s.forEach((char) => countMap[char]? countMap[char]++: countMap[char] = 1);
    Object.values(countMap).forEach(x => x % 2 === 0? evenTotal += x:oddCounts.push(x));

    if(oddCounts.length > 0) {
        evenTotal += oddCounts.sort().pop();
        for(var i = 0; i < oddCounts.length; i++){
            sum += oddCounts[i];
        }
        evenTotal += sum - oddCounts.length;
    }
    return evenTotal;
}
