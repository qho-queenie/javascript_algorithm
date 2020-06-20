// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
//
// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

function queueTime(customers, n) {
  let cus = customers.length;
  let enoughTills = customers.reduce((a, b) => a + b, 0);
  let waitingCus;
  let waitingCusIndex = n;
  let time = 0;
  let shorterCus;
  let tillsInUse = customers.slice(0, n);
  if (cus == 0){
    return 0;
  }
  else if (cus == 1){
    return customers[0];
  }
  else if (n == 1){
    return enoughTills;
  }
  else if (n >= cus){
    return Math.max(...customers);
  }
  else {
    while (waitingCusIndex < cus) {
      waitingCus = customers[waitingCusIndex];
      shorterCus = Math.min(...tillsInUse);
      time = Math.max(...tillsInUse);

      if (waitingCus + shorterCus > time){
        time = waitingCus + shorterCus;
      }

      tillsInUse[tillsInUse.indexOf(shorterCus)] = shorterCus + waitingCus;
      waitingCusIndex++
    }
  }
  return time;
}
