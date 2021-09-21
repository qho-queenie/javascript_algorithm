
// Search Insert Position
//
// Given a sorted array of distinct integers and a target value, return the index
// if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// this is nlogn binary search
let binarySearchInsert = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;

    while(low < high){
      let mid = low + Math.floor((high-low+1)/2);
        if(target == nums[mid]){
          return mid;
        }
        else if(nums[mid] > target) {
            high = mid - 1;
        }
        else if(nums[mid] < target) {
            low = mid + 1;
        }
    }

    // not found in array, and finding where to insert the target
    // high is equal to low
    // if target is lower than low, directly replace low

    if(nums[low] < target) return low + 1;
    else {
        if(low === 0) return 0;
        else return low ;
    }
}

// this is nlogn binary search
let searchInsertRecursive = (nums, target, low = 0, hi = nums.length -1) => {
    while(low < hi) {

     let mid = low + Math.floor((hi-low+1)/2);
        if(nums[mid] === target) return mid;
        return target >  nums[mid] ? searchInsert(nums, target, mid + 1, hi) : searchInsert(nums, target, low, mid - 1);
    }

    // hi == low, meaning not found in array
    if(nums[low] < target) return low + 1;
    else {
        if(low === 0) return 0;
        else return low ;
    }
}

// these are O(n) linear
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
