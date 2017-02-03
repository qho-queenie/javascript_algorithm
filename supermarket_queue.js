// The Supermarket Queue
//
// DESCRIPTION:
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
// The function has two input variables:
//
// customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// The function should return an integer, the total time required.
//
// EDIT: A lot of people have been confused in the comments. To try to prevent any more confusion:
//
// There is only ONE queue, and
// The order of the queue NEVER changes, and
// Assume that the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// The diagram on the wiki page I linked to at the bottom of the description may be useful.
// So, for example:
//
// queueTime([5,3,4], 1)
// should return 12
// because when n=1, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// should return 12

// SOLUTION:
function queueTime(customers, n) {
  var reg = [];
  var totalTime = 0;
  var decremented = false;
  customers = customers.reverse();
  while(customers.length > 0 || reg.length > 0) {
    decremented = false;
    for (let i = reg.length; i < n; i++){
      if (customers.length > 0 ){
        reg.push(customers.pop());
      }
    }
    for (let i = 0; i < reg.length; i++){
      reg[i]--;
      if(reg[i] < 1 ){
        reg.splice(i, 1);
        i--;
      }
      decremented = true;
    }
    if(decremented){
      totalTime++;
    }
  }
  return totalTime;
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

//testing
// https://jsfiddle.net/qho_queenieho/f92a121t/
