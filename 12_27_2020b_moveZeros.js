// Given an array nums, write a function to move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.
//
// Example:
//
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:
//
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function(nums) {
    let accum = 0;
    let ans = [];
    nums.forEach(x => x == 0? accum++:null);
    for(var i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            ans.push(nums[i]);
        }
    }
    while(accum > 0){
        ans.push(0);
        accum--;
    }
    for(var j = 0; j < nums.length; j++){
        nums[j] = ans[j];
    }
}

var moveZeroes = function(nums) {
    let realLen = nums.length;
    for(var i = 0; i < realLen; i++){
        if(nums[i] === 0){
            nums.push(nums.splice(i, 1));
            i = i -1;
        }
    }
}
