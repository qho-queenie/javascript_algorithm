// Linked Lists - Length & Count
//
// Implement Length() to count the number of nodes in a linked list.
//
// length(null) => 0
// length(1 -> 2 -> 3 -> null) => 3
// Implement Count() to count the occurrences of an integer in a linked list.
//
// count(null, 1) => 0
// count(1 -> 2 -> 3 -> null, 1) => 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4

function length(head){
  let count = 0
  if (head == null){
    count = 0;
  }
  else{
    count = 1;
    while(head.next != null){
      head = head.next;
      length(head)
      count++
    }
  }
  return count;
}

// function length(head) {
//   if (head==null)
//       return 0;
//   else
//       return 1 + length(head.next);
// }


function count(head, data){
  let counter = 0
  let wholeLength = length(head);


  while(wholeLength > 0 && head != null){
    if (head.data == data){
      counter++
    }

    wholeLength -= 0;
    head = head.next;
    count(head, data);
  }

  return counter;
}

// Linked Lists - Push & BuildOneTwoThree
//
// Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.
//
// Here's an example of push() usage:
//
// var chained = null
// chained = push(chained, 3)
// chained = push(chained, 2)
// chained = push(chained, 1)
// push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
// The push function accepts head and data parameters, where head is either a node object or null/None/nil. Your push implementation should be able to create a new linked list/node when head is null/None/nil.
//
// The buildOneTwoThree function should create and return a linked list with three nodes: 1 -> 2 -> 3 -> null

function push(head, data) {
  // if head is null, create a new node with data
  let newNode = new Node(data);
  if (head == null){
    return newNode;
  }
  // if head is not null --> prepend data to the provided head
  else {
    let existingNode;
    existingNode = head;
    head = newNode;
    head.next = existingNode;
    return head;
  }
}

function buildOneTwoThree() {
  return push(push(push(null, 3), 2), 1);
}

// Linked Lists - Get Nth
//
// Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position.
// GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on. So for the list 42 -> 13 -> 666, GetNth() with index 1 should return Node(13);
//
// getNth(1 -> 2 -> 3 -> null, 0).data === 1
// getNth(1 -> 2 -> 3 -> null, 1).data === 2
// The index should be in the range [0..length-1]. If it is not, GetNth() should throw/raise an exception (ArgumentException in C#,
// InvalidArgumentException in PHP). You should also raise an exception (ArgumentException in C#, InvalidArgumentException in PHP) if the list is empty/null/None.

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  if (head==null)
      return 0;
  else
      return 1 + length(head.next);
}

function getNth(node, index) { //what is the data stored at index
  let counter = 0;
  let current = node;
  let totalLength = length(node);

  if (node == null || index > totalLength - 1) {
    throw new Error('this is a custom exception error!')
  }
  while (counter < index){
    let previous = current;
    current = current.next;
    counter++
    // keep traversing until counter == index
  }
  //once counter == index
  return current;
}


function getNth(node, index) {
  if (!node)
    throw new Error('Invalid node at ' + index);

  return (index === 0) ? node : getNth(node.next, index - 1);
}
