// Description:

// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.

// Example:

// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"


function reverseWords(str) {
  var result = str.split(" ");
  for (var i = 0; i < result.length; i++){
    var newString = "";
    for (var t = (result[i].length - 1); t >= 0; t--){
      newString += result[i][t];
    }
    result[i] = newString;
  }
  return result.join(" ");
}