// Reverse Vowels of a String
// Write a function that takes a string as input and reverse only the vowels of a string.
//
// Example 1:
//
// Input: "hello"
// Output: "holle"
// Example 2:
//
// Input: "leetcode"
// Output: "leotcede"
// Note:
// The vowels does not include the letter "y".

var reverseVowels = function(s) {
    s = [...s];
    let front = 0;
    let back = s.length -1;
    let frontVowelIndex = -1;
    let backVowelIndex = -1;

    let checkVowel = letter => {
        let vowelPos = "aeiouAEIOU".indexOf(letter);
        return vowelPos === -1? false:true;
    }

    while(front < back){
        if(checkVowel(s[front])){
            frontVowelIndex = front;
        }
        else{
            front++;
        }
        if(checkVowel(s[back])){
            backVowelIndex = back;
        }
        else{
            back--;
        }
        if(frontVowelIndex !== -1 && backVowelIndex !== -1){
            let temp = s[frontVowelIndex];
            s.splice(frontVowelIndex, 1 , s[backVowelIndex])
            s.splice(backVowelIndex, 1, temp)
            front++;
            back--;
            frontVowelIndex = -1;
            backVowelIndex = -1;
        }
    }
    return s.join('');
};



var reverseVowels = function(s) {
    s = [...s];
    let front = 0;
    let back = s.length -1;

    let checkVowel = letter => {
        let vowelPos = "aeiouAEIOU".indexOf(letter);
        return vowelPos === -1? false:true;
    }

    while(front < back){
        if(checkVowel(s[front]) && checkVowel(s[back])){
            [s[front], s[back]] = [s[back], s[front]];
            front++;
            back--;
        }
        else if (checkVowel(s[front])){
          back--;
        }
        else{
          front++
        }
    }
    return s.join('');
};
