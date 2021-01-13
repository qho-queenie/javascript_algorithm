// Two Sum
//
// Solution
// Given an array of integers nums and an integer target, return indices of the
// two numbers such that they add up to target.
//
// You may assume that each input would have exactly one solution, and you may not
// use the same element twice.
//
// You can return the answer in any order.

var twoSum = function(nums, target) {
    if (nums.length <= 0) {
        return false;
    }

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] == target){
                return [i, j];
            }
        }
    }
};

var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        let currentIndex = nums.indexOf(target - nums[i]);
        if(currentIndex !== -1 && currentIndex !== i){
            return [i, currentIndex];
        }
    }
}


let twoSum = (nums, target) => {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let current = target - nums[i];
    if (current in hash) {
      return [hash[current], i];
    }
    hash[nums[i]] = i;
  }
};
