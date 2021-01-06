// Add to Array-Form of Integer
// Easy
//
// 493
//
// 82
//
// Add to List
//
// Share
// For a non-negative integer X, the array-form of X is an array of its digits
// in left to right order.  For example, if X = 1231, then the array form is
// [1,2,3,1].
//
// Given the array-form A of a non-negative integer X, return the array-form of
// the integer X+K.
//
//
//
// Example 1:
//
// Input: A = [1,2,0,0], K = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
// Example 2:
//
// Input: A = [2,7,4], K = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455
// Example 3:
//
// Input: A = [2,1,5], K = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021
// Example 4:
//
// Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
// Output: [1,0,0,0,0,0,0,0,0,0,0]
// Explanation: 9999999999 + 1 = 10000000000


var addToArrayForm = function(A, K) {

    A = A.reverse();
    K = [K].toString().split('').reverse();
    K = K.map(x => parseInt(x));
    let longerLength = A.length <= K.length? K.length:A.length;

    let carryOver = false;
    let result = [];
    let currentResult = 0;

    for(var i = 0 ; i < longerLength; i++){
        if(K[i] === undefined){
            K[i] = 0;
        }
        if(A[i] === undefined){
            A[i] = 0;
        }
        let currentResult = A[i] + K[i];
        currentResult = carryOver === true? currentResult + 1 : currentResult;

        if(currentResult > 9){
            carryOver = true;
            result[i] = currentResult - 10;
        }
        else{
            carryOver = false;
            result[i] = currentResult;
        }
        if(carryOver){
            result[i+1] = 1;
        }
    }
    result = result.reverse();
    return result;
};

// there is a new js datatype BigInt to represent > 2^53
var addToArrayForm = function(A, K) {
  return [...(BigInt(A.join('')) + BigInt(K) + '')];
};
