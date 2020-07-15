// Linked Lists - Shuffle Merge
//
// Write a ShuffleMerge() function that takes two lists and merges their nodes together to make one list, taking
// nodes alternately between the two lists. So ShuffleMerge() with
// 1 -> 2 -> 3 -> null and 7 -> 13 -> 1 -> null should yield 1 -> 7 -> 2 -> 13 -> 3 -> 1 -> null.
// If either list runs out, all the nodes should be taken from the other list. ShuffleMerge() should return the new list.
// The solution depends on being able to move nodes to the end of a list.
//
// var first = 3 -> 2 -> 8 -> null
// var second = 5 -> 6 -> 1 -> 9 -> 11 -> null
// shuffleMerge(first, second) === 3 -> 5 -> 2 -> 6 -> 8 -> 1 -> 9 -> 11 -> null

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function shuffleMerge(first, second) {
  if(!first){
    return second;
  }
  if(!second){
    return first;
  }

  let result = new Node(first.data);
  first = first.next;
  let current = result;

  while(first != null || second != null) {
    if(second != null){
      current.next = new Node(second.data);
      current = current.next;
      second = second.next;
    }

    if(first != null){
      current.next = new Node(first.data);
      current = current.next;
      first = first.next;
    }
  }
  return result;
}
