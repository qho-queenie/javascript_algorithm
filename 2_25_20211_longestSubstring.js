//find the longest substring's length

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    let longest = '';
    let llength = 0;

    for(var i = 0; i < s.length; i++){
        let whereIndex = longest.indexOf(s[i]); // find where is the dup at first
        longest += s[i]; // append it w/o knowing is there a dup

        if(whereIndex >= 0){
            longest = longest.slice(whereIndex + 1);
        }
        llength = longest.length > llength? longest.length : llength;
    }
    return llength;
}
