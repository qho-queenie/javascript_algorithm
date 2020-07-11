// Linked Lists - Front Back Split
//
// Write a FrontBackSplit() function that takes one list and splits it into two sublists — one for the front half,
// and one for the back half. If the number of elements is odd, the extra element should go in the front list.
// For example, FrontBackSplit() on the list 2 -> 3 -> 5 -> 7 -> 11 -> null should yield the two lists 2 -> 3 -> 5 -> null and
// 7 -> 11 -> null. Getting this right for all the cases is harder than it looks. You will probably need special case code to deal with lists of length < 2 cases.
//
// var source = 1 -> 3 -> 7 -> 8 -> 11 -> 12 -> 14 -> null
// var front = new Node()
// var back = new Node()
// frontBackSplit(source, front, back)
// front === 1 -> 3 -> 7 -> 8 -> null
// back === 11 -> 12 -> 14 -> null
// You should throw an error if any of the arguments to FrontBackSplit are null or if the source list has < 2 nodes.
//
// Hint. Probably the simplest strategy is to compute the length of the list, then use a for loop to hop over the
// right number of nodes to find the last node of the front half, and then cut the list at that point. There is a trick technique that uses two pointers
// to traverse the list. A "slow" pointer advances one nodes at a time, while the "fast" pointer goes two nodes at a time. When the fast pointer reaches 
// the end, the slow pointer will be about half way. For either strategy, care is required to split the list at the right point.

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function length(head) {
  if (head == null)
      return 0;
  else
      return 1 + length(head.next);
};

function frontBackSplit(source, front, back) {
  if(!source || !source.next|| !front || !back){
    throw new Error('this is a custom exception error!')
  }
  else {
    front = new Node(source.data);
    let frontCurrent = front;
    let long = Math.ceil(length(source) / 2);
    source = source.next;
    while(long > 1){
      frontCurrent.next = new Node(source.data);
      frontCurrent = frontCurrent.next;
      source = source.next;
      long--;
    }
      back = source;
      console.log(front, 'front');
      console.log(back, 'back');
  }
}
