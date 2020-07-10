// Linked Lists - Alternating Split
//
// Write an AlternatingSplit() function that takes one list and divides up its nodes to make two smaller lists. The sublists should be made from alternating elements in the original list. So if the original list is a -> b -> a -> b -> a -> null then one sublist should be a -> a -> a -> null and the other should be b -> b -> null.
//
// ###JavaScript
//
// var list = 1 -> 2 -> 3 -> 4 -> 5 -> null
// alternatingSplit(list).first === 1 -> 3 -> 5 -> null
// alternatingSplit(list).second === 2 -> 4 -> null

function Node(data) {
  this.data = data;
  this.next = null;
}
function alternatingSplit(head) {
  let first = new Node(head.data);
  let second = new Node(head.next.data);

  let firstCurrent = first;
  let secondCurrent = second;
  let count = 1;
  while(head != null) {
    head = head.next.next;
    if(count % 2 != 0){
      firstCurrent.next = new Node(head.data);
      firstCurrent = firstCurrent.next;
    }
    if(count % 2 == 0){
      secondCurrent.next = new Node(head.data);
      secondCurrent = secondCurrent.next;
    }
     count++
      head = head.next;
  }
      return (first, second)
  }
