// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version,
// all the versions after a bad version are also bad.
//
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first
// bad one, which causes all the following ones to be bad.
//
// You are given an API bool isBadVersion(version) which returns whether version
// is bad. Implement a function to find the first bad version. You should minimize
// the number of calls to the API.


// Example 1:
// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false (good version)
// call isBadVersion(5) -> true (bad version)
// call isBadVersion(4) -> true (bad version)
// Then 4 is the first bad version.
//
// Example 2:
// Input: n = 1, bad = 1
// Output: 1

// the idea is using binary search to narrow down a target, the first to return false from isBadVersion
// binary search's every run splits the perimeter, until there are 2 elements left: good and bad
// so when it has narrowed down to 2 elements, on deciding which one is bad, high will equal to low and thats where the first bad is
// example: [good, bad] --> isBadVersion(good) returns false, so BS sets the high and low to the same ele bad
// example: [bad, good] --> isBadVesion(bad) returns true, so BS sets the high and low to the same ele bad
// and thats when we return the answer where bad is

// when the mid (any mid) returns a true, it means the bad has happened already so we need to look on the left side to find the first bad
// when the mid (any mid) returns a false, it means the bad hasnt happened it, so we need to look on the right side
let solution = isBadVersion => {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let low = 1;
        let high = n;

        while(low < high){ //when there is only 1 ele (version)left, thats the first bad version
            let mid = low +  Math.floor((high - low) /2);
            if(isBadVersion(mid)){ // look on the left side, since we haven't found any bad yet
                high = mid;
            }
            else if(!isBadVersion(mid)){ // look on the right side, since a bad has appeared already, just need to know where it started
                low = mid + 1;
            }
        }
        return low;
    };
};
