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

function sortByLength (array) {
  let temp ;
   for (var i = 0; i < array.length -1 ; i++){
    if (array[i].length > array[i+1].length) {
      temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      // the problem so far is we are not checking the previously switched elements,
      //therefore as long as there is a swap needed in the loop we start over again
      i = -1;
    }
  }
  return array;
};

function sortByLength(array){
  return array.sort((a, b)=> a.length - b.length);
};
