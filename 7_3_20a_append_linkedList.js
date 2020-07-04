// Linked Lists - Append
//
// Write an Append() function which appends one linked list to another. The head of the resulting list should be returned.
//
// var listA = 1 -> 2 -> 3 -> null
// var listB = 4 -> 5 -> 6 -> null
// append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil.
// If one list is null/NULL/None/nil and the other is not, simply return the non-null/NULL/None/nil list.

function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  let current = listA;
  let prev = null;

  if (!listA){
    return listB;
  }

  while(current.next !== null){
    prev = current;
    current = current.next;
  }

  current.next = listB;
  return listA;
}
