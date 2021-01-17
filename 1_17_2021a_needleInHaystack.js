Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle
is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question
to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string.
This is consistent to C's strstr() and Java's indexOf().

var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0;
    if(haystack.length < needle.length) return -1;
    if(haystack.length === 1 || needle.length === 1) return haystack.indexOf(needle);
    haystack = [...haystack];

    for(var i = 0; i <= haystack.length - needle.length; i++){
        if(haystack.slice(i, i + needle.length ).join('') === needle){
            return i;
        }
    }
    return -1;
};
