// Linked Lists - Move Node
//
// Write a MoveNode() function which takes the node from the front of the source list and moves it to the front of the destintation list. You should throw an error when the source list is empty. For simplicity, we use a Context object to store and return the state of the two linked lists. A Context object containing the two mutated lists should be returned by moveNode.
//
// MoveNode() is a handy utility function to have for later problems.


function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

function moveNode(source, dest) {
  let newHead = new Node(source.data)
  newHead.next = dest;
  source = source.next;
  return new Context(source, newHead);
}
