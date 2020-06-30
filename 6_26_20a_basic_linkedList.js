function Node(data) {
  this.data = data;
  this.next = null;
}

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


// Linked Lists - Insert Nth
//
// Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.
//
// InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.
//
// insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
// insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
// insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)

function insertNth(head, index, data) {
  let counter = 1;
  let current = head;
  let newNode = new Node(data);
  let previous;

  if(head == null){
    return newNode;
  }

  if(index == 0){
    newNode.next = head;
    return newNode;
  }

  while(counter < index){
    previous = current;
    current = current.next;
    counter++;
  }
    let next = current.next;
    current.next = newNode;
    newNode.next = next;
    return head;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  let counter = 1;
  let newNode = new Node(data);
  let current = head;
  if (!head){
    return newNode;
  }

  if(index == 0){
    newNode.next = current;
    return newNode;
  }

  while(counter < index){
    let prev = current;
    current = current.next;
    counter++;
  }
  // once find the index spot in the linked list:

  newNode.next = current.next;
  // first save the right end of the original ll by setting it as the newNode's next

  current.next = newNode;
  // then connect the end of the list to the left of the ll

  return head;
}


function insertNth(head, index, data) {
  if (!head)
    return new Node(data);

  if (index == 0){ // once index has been reduced to 0, the next node is the newNode
    let newNode = new Node(data);
    newNode.next = head;
    return newNode;
  }

  head.next = insertNth(head.next, index - 1, data);
  return head; // head.next = head (which is head.next) as long as index is still > 0

}
