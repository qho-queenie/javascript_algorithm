// binary search, in a sorted list of numbers, set the midpoint as max and ask the question 'is the target greater or less than the mid?'
// if the target < midpoint, set max as mid, min remains as 0
// if the target > midpoint, set min as midpoint, max remains as the last ele
// repeat until midpoint is the target
// if max is equal min, target doesnt exist

let search = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;

    while(low <= high){
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
    return -1;
};

// recursive: stop case is when midpoint is equal target, or if max is equal min
// repeat is checking if midpoint is the target, and resetting the midpoint
// depending on the last result

let searchRecursive = (nums, target, low = 0, high = nums.length - 1) => {
    if(low > high) {
        return -1;
    }

    let mid = low + Math.floor((high-low+1)/2);

    if(nums[mid] == target) return mid;

    if(nums[mid] > target){
        return search(nums, target, low, mid - 1);
    }
    else if(nums[mid] < target){
        return search(nums, target, mid + 1, high);
    }

};
