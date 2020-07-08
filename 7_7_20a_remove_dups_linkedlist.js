// Linked Lists - Remove Duplicates
//
// Write a RemoveDuplicates() function which takes a list sorted in increasing order and deletes any duplicate nodes from the list.
// Ideally, the list should only be traversed once. The head of the resulting list should be returned.
//
// var list = 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 -> null
// removeDuplicates(list) === 1 -> 2 -> 3 -> 4 -> 5 -> null
// If the passed in list is null/None/nil, simply return null.
//
// Note: Your solution is expected to work on long lists. Recursive solutions may fail due to stack size limitations.

function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  function removeDuplicates(head) {
    if(!head){
      return null;
    }
    if(!head.next){
      return head;
    }
  let prev = head;
  let current = head.next;

  while(current !== null){
    if(prev.data == current.data){
      prev.next = current.next;
      current = prev.next;
    }
    else if(prev.data !== current.data){
      prev = current;
      current = current.next;
    }
  }
  return head;
}



function removeDuplicates(head) {
  if(!head || !head.next){
    return head;
  }

  let current = head;

  while(current.next !== null){
    let nextNode = current.next;
    if(current.data !== nextNode.data){
      current = current.next;
    }
    else {
      current.next = nextNode.next;
    }
  }
  return head;
}
