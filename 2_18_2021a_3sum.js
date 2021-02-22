// 3Sum
// Given an array nums of n integers, are there elements a, b, c in nums such
// that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Notice that the solution set must not contain duplicate triplets.
//
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
//
//
// Input: nums = [0]
// Output: []

// very brute force, but for practicing the basics
var threeSum = function(nums) {
    let result = [];
    for(var i = 0; i < nums.length - 2; i++){
        for(var j = i + 1; j < nums.length - 1; j++){
            for(var k = j + 1; k < nums.length; k++){
                if(nums[i] + nums[j] + nums[k] === 0){
                   result.push([nums[i], nums[j], nums[k]].sort((a,b) => a - b));
                }
            }
        }
    }

    let multiDimensionalUnique = arr => {
        var uniques = [];
        var itemsFound = {};
        for(var i = 0, l = arr.length; i < l; i++) {
            var stringified = JSON.stringify(arr[i]);
            if(itemsFound[stringified]) { continue; }
            uniques.push(arr[i]);
            itemsFound[stringified] = true;
        }
        return uniques;
    }

    return multiDimensionalUnique(result);
};


var threeSum = function(nums) {
    let target;
    let targetArr;
    let result = [];
    nums = nums.sort((a,b) => a - b);
    for(var i = 0; i < nums.length - 1; i++){
        for(var j = i + 1; j < nums.length; j++){
            targetArr = nums.slice(j+1);
            target = targetArr.indexOf(0 - ((nums[i]) + (nums[j])));
            if(target !== -1){
                result.push([nums[i], nums[j], 0 - (nums[i] + nums[j])]);
            }
        }
    }

    return multiDimensionalUnique(result);
}



// we set nums[i] and i++ as the target,
// if any combinations in the rest of the array + current target is equal to zero, this is a result set

// since the array is sorted,

var threeSum = function(nums) {
    let left, right, sum;
    let answers = [];

    if (nums.length < 3) return answers;
    nums = nums.sort((a,b) => a - b);
    for(var i = 0 ; i < nums.length; i++){
        left = i + 1, right = nums.length - 1, sum = 0;

        while(left < right){
            // generate sum once for all of the following 3 checks, less computations
            sum = nums[i] + nums[left] + nums[right];
            if(sum === 0){
                answers.push([nums[i], nums[left], nums[right]]);
                // we check for duplicates first, then move on to the next ele (not a dup anymore)
                while(nums[left] === nums[left + 1]) left++;
                while(nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            }
            else if(sum > 0){
                // we dont need to check for duplicates in this case cause we need to try each combo's
                right--;
            }
            else if(sum < 0){
                // we dont need to check for duplicates in this case cause we need to try each combo's
                left++;
            }
        }
        // more optimization
        while(nums[i] == nums[i+1]) i++;

    }
    return answers;
};
