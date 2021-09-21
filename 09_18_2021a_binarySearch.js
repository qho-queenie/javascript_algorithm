// binary search, in a sorted list of numbers, set the midpoint as max and ask the question 'is the target greater or less than the mid?'
// if the target < midpoint, set max as mid, min remains as 0
// if the target > midpoint, set min as midpoint, max remains as the last ele
// repeat until midpoint is the target
// if max is equal min, target doesnt exist

// rule of thumb : exclude the mid since it has been proven target !== mid

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

// https://leetcode.com/problems/binary-search/discuss/423162/Binary-Search-101
//
// My rule of thumb when it comes to binary search:
//
// Include ALL possible answers when initialize lo & hi
// Don't overflow the mid calculation
// Shrink boundary using a logic that will exclude mid
// Avoid infinity loop by picking the correct mid and shrinking logic
// Always think of the case when there are 2 elements left :
  // imagine when there are only 2 elements left in the boundary. If the logic fell into the else statement, since we are using the left/lower mid, it's simply not doing anything. It just keeps shrinking itself to itself, and the program got stuck.
