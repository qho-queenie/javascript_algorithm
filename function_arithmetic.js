// DESCRIPTION:

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:

// arithmetic(5, 2, "add") should return 7

// arithmetic(5, 2, "subtract") should return 3

// arithmetic(5, 2, "multiply") should return 10

// arithmetic(5, 2, "divide") should return 2.5


// SOLUTION:
function arithmetic(a, b, operator){
  switch(operator){
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}

function test(func, expected){
  console.log(func, "this is the actual value");
  console.log(expected, "this is the expected value")
  if (func === expected){
    console.log("test passed");
    return true;
  }
  else{
    console.log(("test failed"));
    return false;
  }
}

test(arithmetic(5, 2, "add"), 7);

test(arithmetic(5, 2, "subtract"), 3)

test(arithmetic(5, 2, "multiply"), 10)

test(arithmetic(5, 2, "divide"), 2.5)

// testing
// https://jsfiddle.net/qho_queenieho/721r3uk8/
