// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
//
// Example
//
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  let oddNums = [];
  for (var i = 0; i < array.length; i++){
    if (array[i] % 2 != 0){
      oddNums.push(array[i]);
    }
  }
  oddNums = oddNums.sort((a,b) => b - a);
  for (var j = 0; j < array.length; j++){
    if (array[j] % 2 != 0){
      array[j] = oddNums.pop();
    }
  }
  return array;
}


function sortArray(array) {
  let oddNums = array.filter(num => num % 2 == 1).sort((a,b) => b - a);
  return array.map(x => x % 2 == 1?  x = oddNums.pop() : x);
}
