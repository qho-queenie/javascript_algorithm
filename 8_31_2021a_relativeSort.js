Relative Sort Array

Given two arrays arr1 and arr2, the elements of arr2 are distinct,
and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1
are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.



Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
Example 2:

Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44]

let relativeSortArray = function(arr1, arr2) {
    let map1 = new Map();
    let extra = [];
    let result = [];

    arr2.forEach(x => map1.set(x, 0))

    arr1.map(x => map1.has(x)? map1.set(x, map1.get(x) + 1) : extra.push(x))
    extra = extra.sort((a,b) => a-b)

    for (let [key, value] of map1) {
        while(value > 0) {
            result.push(key);
            value--;
        }
    }
   return result.concat(extra);
};
