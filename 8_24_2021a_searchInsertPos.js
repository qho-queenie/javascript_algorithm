
Search Insert Position

Given a sorted array of distinct integers and a target value, return the index
if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

let searchInsert = (nums, target) => {
    let targetIndex = nums.indexOf(target);
    if(targetIndex > -1) {
        return targetIndex;
    }
    for(var i = 0; i < nums.length; i++){
        if(nums[i] > target) {
            return i;
        }
    }
    return i;
}

let searchInsert = (nums, target) => {
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] == target || target < nums[i]){
            return i;
        }
    }
    return nums.length;
}
