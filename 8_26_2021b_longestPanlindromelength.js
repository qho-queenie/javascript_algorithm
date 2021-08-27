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

// this method is more direct and faster, because it deals with math more than sorting and popping
// for the remaining odd counts, keep minusing 2 from each as long as it doesnt result in a negative number
// (because there is still more than 1 count), and finally when all become 1, add 1 to the grand total, since
// there is one odd number of characters can be accepted in the pallindrome
let longestPalindrome = s => {
    if(s.length < 2) return s.length;
    let countMap = {};
    s = [...s];
    let oddCounts = [];
    let total = 0;


    s.forEach((char) => countMap[char]? countMap[char]++: countMap[char] = 1);
    Object.values(countMap).forEach(x => x % 2 === 0? total += x:oddCounts.push(x));

    if(oddCounts.length > 0) {
        for(var i = 0; i < oddCounts.length; i++){
            while(oddCounts[i] - 2 > 0){
                total += 2;
                oddCounts[i] -= 2;
            }
        }
        total += 1;
    }
    return total;
}
