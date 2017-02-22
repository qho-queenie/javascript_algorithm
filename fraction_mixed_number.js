// Description:

// Task

// Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

// a b/c

// where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c.

// If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

// Division by zero should raise an error (preferably, the standard zero division error of your language).

// Examples

// Input: 42/9, expected result: 4 2/3.
// Input: 6/3, expedted result: 2.
// Input: 4/6, expected result: 2/3.
// Input: 0/18891, expected result: 0.
// Input: -10/7, expected result: -1 3/7.
// Inputs 0/0 or 3/0 must raise a zero division error.
// Note

// Make sure not to modify the input of your function in-place, it is a bad practice.

"use strict";
function mixedFraction(s){
  var fraction = s.split("/");
  var numerator = parseInt(fraction[0]);
  var de = parseInt(fraction[1]);
  if (numerator === 0){
    return "0";
  }
  if (de === 0){
      return  1/0;
  }
  if(Math.abs(numerator) < Math.abs(de)){
   var less = reduce(numerator, de);
   if (less[1] < 0){
    less[0]  *= -1;
    less[1] *= -1;
  }
    return less[0] + "/" + less[1];
  }
  else {
  var re = numerator % de;
  var num = ~~(numerator/ de);
  if (num < 0){
    de = Math.abs(de);
    numerator = Math.abs(numerator);
    re = Math.abs(re);
  }
  var reduced = reduce(re, de)
  console.log(reduced[0], reduced[1], "hi");
  if (reduced[1] < 0){
    reduced[0]  *= -1;
    reduced[1] *= -1;
  }
  if (reduced[0] === 0){
    return num + "";
  }
  return num + " " + reduced[0] + "/" + reduced[1];
  }
}

function reduce(numerator,denominator){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
  return [numerator/gcd, denominator/gcd];
}
