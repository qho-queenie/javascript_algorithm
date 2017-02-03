// Sort array by string length
//
// DESCRIPTION:
//
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
//
// For example, if this array were passed as an argument:
//
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
//
// Your function would return the following array:
//
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
//
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
//
// SOLUTION:

function sortByLength (array) {
  var temp = "";
  for (var i = 0; i < array.length ; i++){
    var j = i;
    while(j > 0 && array[j-1].length > array[j].length){
    temp = array[j]
    array[j] = array[j-1];
    array[j-1] = temp;
    j--
    }
  }
  return array;
}

// Testing:
// https://jsfiddle.net/qho_queenieho/1aLoprmb/
