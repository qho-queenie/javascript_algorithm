// DESCRIPTION:

// For building the encrypted string:
// Take every 2nd char from the string. Then the other chars.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

// SOLUTION:

function encrypt(text, n) {
  var result = "";
  var result2 = "";
if (text === ""){
  return "";
}
if (!text){
  return null;
}
if (n <= 0){
  return text;
}
else {
  for (var i = 0; i < text.length; i++){
    if ( i % 2 === 1){
    result = result + text[i];
    }
    else{
    result2 = result2 + text[i];
    }
  }
}
return encrypt(result + result2 , (n - 1));
}
function decrypt(string, n) 
{if (string === ""){
  return "";
}
if (!string){
  return null;
}
  var result = "";
if (n <= 0){
// console.log(string , "n <=0");
  return string;
}
else {
  for (var i = 0; i < string.length; i++){
    if (i % 2 === 1){
      result += string[Math.floor(i / 2)];
    }
    else {
      result += string[Math.floor(string.length/2) + Math.floor(i/2)];
    }
  }
}
  return decrypt(result, n - 1);
}

// function test(func, expected){
//   console.log(func, "this is the actual value");
//   console.log(expected, "this is the expected value")
//   if (func === expected){
//     console.log("test passed");
//     return true;
//   }
//   else{
//     console.log(("test failed"));
//     return false;
//   }
// }

// test(encrypt("This is a test!", 1), "hsi  etTi sats!");
// test(encrypt("This is a test!", 1), "s eT ashi tist!");

// testing 
// https://jsfiddle.net/qho_queenieho/kso6fgaa/