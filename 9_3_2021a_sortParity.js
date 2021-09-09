// Sort Array By Parity
//
// Given an integer array nums, move all the even integers at the beginning of the
// array followed by all the odd integers.
//
// Return any array that satisfies this condition.
//
// Example 1:
//
// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:
//
// Input: nums = [0]
// Output: [0]

var sortArrayByParity = function(nums) {
    // filter nums for even numbers, save in array
    // filter nums for odd numbers, save in array
    // concat the 2 arrays
    let evenArr = [];
    let oddArr = [];

    nums.forEach(x => x % 2 === 0 ? evenArr.push(x) : oddArr.push(x));
    return evenArr.concat(oddArr);
};

// instead of allocating 2 arrays, unshift and push to 1 new emptry array
var sortArrayByParity = function(nums) {
  let resultArr = [];
  nums.forEach(x => x % 2 === 0 ? resultArr.unshift(x) : resultArr.push(x));

  return resultArr;
}

// using spread operator to join 2 filtered arrays
var sortArrayByParity = function(nums) {
  return [...nums.filter(x => x % 2 === 0),...nums.filter(x => x % 2 !== 0)];
}

// the biggest problem with the above solutions are extra allocations, the best way to is do a in-place swap
var sortArrayByParity = function(nums) {
  let i = 0;
  let j = nums.length - 1;

  while(i < j){
    // keep moving only until the left is odd and right is even
      if(nums[i] % 2 !== 0 && nums[j] % 2 === 0){
          [nums[i], nums[j]] = [nums[j], nums[i]];
      }
      if(nums[i] % 2 !== 0) {
          j--;
      }
      if(nums[i] % 2 === 0){
          i++;
      }
  }
  return nums;
}
