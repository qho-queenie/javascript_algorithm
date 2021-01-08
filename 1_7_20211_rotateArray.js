Rotate Array

Given an array, rotate the array to the right by k steps, where k is non-negative.


Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]



var rotate = function(nums, k) {
    while (k > 0){
        nums.unshift(nums.pop());
        k--;
    }
    return nums;
};

// if we dont have to do it in place:
var rotate = function(nums, k) {
    return [...nums.slice(nums.length - k),...nums.slice(0, nums.length - k];
};


//
let rotate = (arr, k) => {

// do it however many k times
  for(var i = 0; i < k; i++){
    let moveToFront = arr[arr.length - 1];

    // need to re-arranging the rest of the array into its original form by however
    // many arr.length times
    for(var j = 0; j < arr.length; j++){
      let temp = arr[j];
      arr[j] = moveToFront;
      moveToFront = temp;

    }
  }
  return arr;
}
