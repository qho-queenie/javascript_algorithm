// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.
//
// The result array should be sorted in ascending order of values.
//
// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.
//
// Examples
// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]
//
// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]
//
// [1, 23, 3, 4, 7] should return [[1, 3]]
//
// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]

function twosDifference(input){
  let resultArr = [];
  let headOfCurrent = 0;
  input = input.sort((a, b) => a - b);

  while(headOfCurrent <= input.length){
    for (var i = headOfCurrent + 1; i < input.length; i++){
      if(Math.abs(input[headOfCurrent] - input[i]) == 2){
        resultArr.push([input[headOfCurrent], input[i]]);
      }
    }
    headOfCurrent += 1;
  }
  return resultArr.sort(function(a,b) {
    return a[0]-b[0]
  });
}
