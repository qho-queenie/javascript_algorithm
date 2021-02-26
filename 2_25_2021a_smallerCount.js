// How Many Numbers Are Smaller Than the Current Number
// Given the array nums, for each nums[i] find out how many numbers in the array
// are smaller than it. That is, for each nums[i] you have to count the number of
// valid j's such that j != i and nums[j] < nums[i].
//
// Return the answer in an array
//
// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
//
// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]

var smallerNumbersThanCurrent = function(nums) {
    let sorted = nums.slice().sort((a,b)=>a-b);
    let len = nums.length;
    for(var i = 0; i < len; i++){
        nums[i] = sorted.indexOf(nums[i]);
    }
    return nums;
}
var smallerNumbersThanCurrent = function(nums) {
    let len = nums.length;
    let result = [];
    let sorted = nums.slice().sort((a,b)=>b-a);

    for(var i = 0; i < len; i++){
        result.push(len - 1 - sorted.lastIndexOf(nums[i]));
    }
    return result;
}
var smallerNumbersThanCurrent = function(nums) {
    let hash = {};
    let result = [];

    nums.forEach(x => hash[x]? hash[x]++ : hash[x] = 1);

    for(var i = 0; i < nums.length; i++){
        let count = 0;
        for (let key in hash) {
            if(nums[i] > parseInt(key)){
                count += hash[key];
            }
        }
        result.push(count);
    }
    return result;
};


var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    let len = nums.length;

    for(var i = 0; i < nums.length; i++){
        let count = 0;
        for(var j = 0; j < nums.length; j++){
            if(i !== j && nums[i] > nums[j]){
                count++;
            }
        }
        result.push(count);
    }
    return result;
};
