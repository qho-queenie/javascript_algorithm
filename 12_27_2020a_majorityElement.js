// Majority Element
// Given an array of size n, find the majority element. The majority element is
// the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element always
// exist in the array.
//
// Example 1:
//
// Input: [3,2,3]
// Output: 3
// Example 2:
//
// Input: [2,2,1,1,1,2,2]
// Output: 2

// is there ALWAYS gonna be a majority? yes
// create hashmap object
// the point is find the count of each element until its count is > n/2 , by
// creating a filter that count value > n/2 but this is slow
// create countObj, then sort countObj by its value, then look it up again in
// the countObj for its value, or by Object.entries()


let majorityElement = nums => {
    let countObj = {};
    nums.forEach(eachNum => countObj.hasOwnProperty(eachNum)? countObj[eachNum] += 1 : countObj[eachNum] = 1);
    return Object.entries(countObj).sort((a, b) => b[1] - a[1])[0][0];
    //return Object.keys(countObj).find(key => countObj[key] == Object.values(countObj).sort((a,b) => b - a)[0]);

    // this is even better, just sort the nums array and return the element before (nums' length /2 - 1):
    // return nums.sort((a,b) => a-b)[Math.floor(nums.length/2)];
};
