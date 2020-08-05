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
