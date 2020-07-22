// Linked Lists - Iterative Reverse
//
// Write an iterative Reverse() function that reverses a linked list.
// Ideally, Reverse() should only need to make one pass of the list.
//
// var list = 2 -> 1 -> 3 -> 6 -> 5 -> null
// reverse(list)
// list === 5 -> 6 -> 3 -> 1 -> 2 -> null

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}


function reverse(list){
  if(!list){
    return null;
  }
  let result = new Node(list.data);
  list = list.next;
  while(list != null){
    let tmp = new Node(list.data);
    tmp.next = result;
    result = tmp;
    list = list.next;
  }
  return result;
}
