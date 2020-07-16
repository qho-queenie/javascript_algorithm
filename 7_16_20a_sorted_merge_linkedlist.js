// Linked Lists - Sorted Merge
//
// Write a SortedMerge() function that takes two lists, each of which is sorted in increasing order,
// and merges the two together into one list which is in increasing order. SortedMerge() should return the new list.
// The new list should be made by splicing together the nodes of the first two lists. Ideally,
// SortedMerge() should only make one pass through each list. SortedMerge() is tricky to get right and it may be solved iteratively or recursively.
//
// var first = 2 -> 4 -> 6 -> 7 -> null
// var second = 1 -> 3 -> 5 -> 6 -> 8 -> null
// sortedMerge(first, second) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 6 -> 7 -> 8 -> null
// There are many cases to deal with: either 'first' or 'second' may be null/None/nil, during processing either 'first' or 'second' may
// run out first, and finally there's the problem of starting the result list empty, and building it up while going through 'first' and 'second'.
//
// If one of the argument lists is null, the returned list should be the other linked list (even if it is also null). No errors need to be thrown in SortedMerge().


function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function sortedMerge(first, second) {
  if(!first && !second){
    return null;
  }

  if(first == null){
    return second;
  }

  if(second == null){
    return first;
  }

  let result = new Node(null);
  let current = result;

  while(first != null && second != null){
    if(first.data < second.data){
      current.next = new Node(first.data);
      current = current.next;
      first = first.next;
    }
    else if(second.data < first.data){
      current.next = new Node(second.data);
      current = current.next;
      second = second.next;
    }
    else if(first.data == second.data){
      current.next = new Node(first.data);
      current = current.next;
      first = first.next;

      current.next = new Node(second.data);
      current = current.next;
      second = second.next;
    }
  }
  if(first == null){
    current.next = second;
  }
  if(second == null){
    current.next = first;
  }
  return result.next;
}
