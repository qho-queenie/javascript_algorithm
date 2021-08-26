// Two Sum II - Input array is sorted
//
// Given an array of integers numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number.
//
// Return the indices of the two numbers (1-indexed) as an integer array answer of
// size 2, where 1 <= answer[0] < answer[1] <= numbers.length.
//
// The tests are generated such that there is exactly one solution.
// You may not use the same element twice.

let twoSum = (numbers, target) => {
    for(var i = 0; i < numbers.length; i++) {
        for(var j = i+1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target){
                return [i + 1, j + 1];
            }
        }
    }
}

let twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;

    while(left < right){
        let currSum = numbers[left] + numbers[right];
        if (currSum > target){
            right--;
        }
        else if(currSum < target){
            left++;
        }
        else{
            return [left + 1, right + 1];
        }
    }
}
