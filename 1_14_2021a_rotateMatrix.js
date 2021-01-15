// You are given an n x n 2D matrix representing an image, rotate the image by 90
// degrees (clockwise).
//
// You have to rotate the image in-place, which means you have to modify the input
// 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.


// not in place yet:
var rotate = function(matrix) {
  let res = [];
  let temp = [];
    for( var i = 0; i < matrix.length; i++){
      temp = [];
      for(var j = matrix.length - 1 ; j >= 0; j--){
        temp.push(matrix[j][i]);
      }
      res.push(temp);
    }
    return res;
};
