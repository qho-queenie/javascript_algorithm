// Linked Lists - Recursive Reverse

function Node(data) {
  this.data = data;
  this.next = null;
}

function reverse(list) {
  if (!list|| !list.next ) {
    return list;
  }

  let tmp = reverse(list.next);
  list.next.next = list;
  list.next = null;

  return tmp;
}

// iteratively:
// just plugging the head out, and creating a new list with it:
var reverseList = function(list) {
    let next = null;
    let prev = null;

    while(list){
        next = list.next;
        list.next = prev;
        prev = list;
        list = next;
    }
    return prev;
};
