// Backspace String Compare
//
// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
//
// Note that after backspacing an empty text, the text will continue empty.
//
// Example 1:
//
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:
//
// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:
//
// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:
//
// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".

let backspaceCompare = str => {
  for (var i = 0; i < str.length; i++){
    if(str[i + 1] === '#'){
      str.splice(i, 2);
      i = i < 3? 0: i - 2;
    }
  }
  return str;
}


let transform = str => {
  for (var i = 0; i < str.length; i++){
    if(str[i] === '#'){
      str.splice(i - 1, 2);
      i = i < 3? 0: i - 2;
    }
  }
  return str;
}

var backspaceCompare = function(S, T) {

    let transform = str => {
        let result = [];
      for (var i = 0; i < str.length; i++){
        str[i] === '#'? result.pop():result.push(str[i]);
      }
      return result;
    }
    return transform([...S]).join('') === transform([...T]).join('')? true:false;
};
