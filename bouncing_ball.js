// Description:

// A child plays with a ball on the nth floor of a big building. The height of this floor is known:

// (float parameter "h" in meters, h > 0) .

// He lets out the ball. The ball rebounds for example to two-thirds:

// (float parameter "bounce", 0 < bounce < 1)

// of its height.

// His mother looks out of a window that is 1.5 meters from the ground:

// (float parameters window < h).

// How many times will the mother see the ball either falling or bouncing in front of the window

// (return a positive integer unless conditions are not fulfilled in which case return -1) ?

// Note

// You will admit that the ball can only be seen if the height of the rebouncing ball is stricty greater than the window parameter.

// Example:

// h = 3, bounce = 0.66, window = 1.5, result is 3

// h = 3, bounce = 1, window = 1.5, result is -1


function bouncingBall(h,  bounce,  window) {
 var count = 1;
 var BH = h * bounce;
 console.log(h, bounce, window)
 if (window >= h || window <= 0 || h <= 0 || bounce >= 1 || bounce <= 0){
   return -1;
 }
 while (BH > window){
   BH = BH * bounce
   count += 2;
 }
 return count;
}