// Sort Array by Increasing Frequency
//
// Given an array of integers nums, sort the array in increasing order based on the
// frequency of the values. If multiple values have the same frequency, sort them in decreasing order.
//
// Return the sorted array.
//
// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
// Example 2:
//
// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
// Example 3:
//
// Input: nums = [-1,1,-6,4,5,-6,1,4,1]
// Output: [5,-1,4,4,-6,-6,1,1,1]

var frequencySort = function(nums) {
    let map1 = {};
    let tally = {};
    let resultArr = [];

    // mapping the nums by value:frequencies
    nums.forEach(x => map1[x]? map1[x]++ : map1[x] = 1);

    // grouping frequencies by their values as arrays
    // {frequencies: [1, 2, 3]} means  for the numbers 1, 2 and 3 they all occured key times
    Object.entries(map1).forEach(x => tally[x[1]]? tally[x[1]].push(Number([x[0]])) :  tally[x[1]] = [Number([x[0]])]);

    // for those frequency arrays that are > 1, sort them descendingly
    for (var value in tally){
        if(tally[value].length > 1){
            let sortTally = tally[value].sort((a,b) => b - a);
            tally[value] = sortTally;
        }
    }

    // flatting it so we can produce the resultArr
    let tallyFlat = Object.entries(tally);

    for(var i = 0; i < tallyFlat.length; i++){
        for(var j = 0; j < tallyFlat[i][1].length; j++){
            let currentCount = Number(tallyFlat[i][0]);
            while(currentCount > 0){
                resultArr.push(tallyFlat[i][1][j])
                currentCount--;
            }
        }
    }
    return resultArr;
};

// the main difference between the prev solution and the following solution is
// use Map instead of object, object stringify the keys but Map doesnt
// instead of grouping the values with the same frequencies (in an array as value), keep it as a map with the frequencies as the key, and the frequencies as value
// also sorting descendinglu doesnt need to rely on the values array, because the original array has been sorted descendingly in the beginning

// the last step of flattening it and creating the the resultArr is the same
var frequencySort = function(nums) {
    let resultArr = [];
    // sort array descendingly first, because the same frequecies will be descending no matter what
    let sortedNums = nums.sort((a, b) => (b - a));

    //create map to tally up their frequecies
    let map = new Map();
    sortedNums.forEach(x => map.set(x, map.get(x) + 1 || 1));


    //sort map ascendingly by their value (frequncies)
    let sortedMap = [...map.entries()].sort((a,b)=>a[1]-b[1]);

    // spread them out in the result array by their value and frequencies
    for(var i = 0; i < sortedMap.length; i++){
        let currentCount = sortedMap[i][1];
        while(currentCount > 0){
            resultArr.push(sortedMap[i][0])
            currentCount--;
        }
    }
    return resultArr;
};

// the last improvement is just the last part of flattening and sorting ascendingly by their value:
// instead of flattening it as a 2D array, keep it as a Map and preoduce the resultArr using value as the freqencies of each key
var frequencySort = function(nums) {
    let resultArr = [];
    // sort array descendingly first, because the same frequecies will be descending no matter what
    let sortedNums = nums.sort((a, b) => (b - a));

    //create map to tally up their frequecies
    let map = new Map();
    sortedNums.forEach(x => map.set(x, map.get(x) + 1 || 1));


    //sort map ascendingly by their value (frequncies)
    let sortedMap = new Map([...map.entries()].sort((a,b)=>a[1]-b[1]))

    for(let [key,value] of sortedMap){
        while(value--){
            resultArr.push(key)
        }
    }
    return resultArr;
};
