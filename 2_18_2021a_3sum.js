3Sum
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]


Input: nums = [0]
Output: []

// very brute force, but for practicing the basics
var threeSum = function(nums) {
    let result = [];
    for(var i = 0; i < nums.length - 2; i++){
        for(var j = i + 1; j < nums.length - 1; j++){
            for(var k = j + 1; k < nums.length; k++){
                //console.log(nums[i], nums[j], nums[k])
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
