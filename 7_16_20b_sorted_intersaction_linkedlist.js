// Linked Lists - Sorted Intersect
//
// Write a SortedIntersect() function which creates and returns a list representing the intersection of two lists that are sorted in increasing order. Ideally, each list should only be traversed once. The resulting list should not contain duplicates.
//
// var first = 1 -> 2 -> 2 -> 3 -> 3 -> 6 -> null
// var second = 1 -> 3 -> 4 -> 5 -> -> 6 -> null
// sortedIntersect(first, second) === 1 -> 3 -> 6 -> null

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function sortedIntersect(first, second) {
  if (!first || !second){
    return null;
  }

  let result = new Node(null);
  let resultCurrent = result;

  while(first != null && second != null){
    if(first.data == second.data){
      if(first.data != resultCurrent.data){
        resultCurrent.next = new Node(first.data);
        resultCurrent = resultCurrent.next;
      }
      first = first.next;
      second = second.next;
    }
    else if(first.data < second.data){
      first = first.next;
    }
    else if(second.data < first.data){
      second = second.next;
    }
  }
  return result.next;
}
