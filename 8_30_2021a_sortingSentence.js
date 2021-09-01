// Sorting the Sentence
//
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// Each word consists of lowercase and uppercase English letters.
//
// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.
//
// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.
//
// Example 1:
//
// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
// Example 2:
//
// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.

let sortSentence = s => {
    let sArr = s.split(' ');
    let map = new Map();
    let result;
    let resultStr = '';

    for (var i = 0; i < sArr.length; i++){
        let currentLength = sArr[i].length;
        map.set(Number(sArr[i].slice(currentLength -1)),sArr[i].slice(0, currentLength -1));
    }
    result = new Map([...map.entries()].sort());

    for (let value of result.values()){
        resultStr += value + ' ';
    }
    return resultStr.trim();
}

// I thought this would be faster, but turns out not
let sortSentence = s => {
    let sArr = s.split(' ');
    // or just let resultArr = [];
    let resultArr = new Array(sArr.length);
    let resultStr = '';

    for(var i = 0; i < sArr.length; i++){
        let index = sArr[i].slice(sArr[i].length - 1);
        resultArr[index - 1] = sArr[i].slice(0, sArr[i].length - 1)
    }
    return resultArr.join(' ');
}

// sort by the last letter of each element, remove it by slicing and finally join them
const sortSentence = function(s) {
    return s.split(' ').sort((a,b) => a[a.length - 1] - b[b.length - 1]).map(x => x.slice(0, x.length - 1)).join(' ');
};
