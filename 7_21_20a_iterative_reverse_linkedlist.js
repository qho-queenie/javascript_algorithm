// Linked Lists - Iterative Reverse
//
// Write an iterative Reverse() function that reverses a linked list.
// Ideally, Reverse() should only need to make one pass of the list.
//
// var list = 2 -> 1 -> 3 -> 6 -> 5 -> null
// reverse(list)
// list === 5 -> 6 -> 3 -> 1 -> 2 -> null

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}


function reverse(list){
  if(!list){
    return null;
  }
  let result = new Node(list.data);
  list = list.next;
  while(list != null){
    let tmp = new Node(list.data);
    tmp.next = result;
    result = tmp;
    list = list.next;
  }
  return result;
}

// inspired by http://cslibrary.stanford.edu/105/LinkedListProblems.pdf
// MoveNode()'s concept
function reverse(list){
  let result = new Node(null);
  let current = list;
  while(current != null){
    let newNode = new Node(current.data);
    newNode.next = result;
    result = newNode;
    current = current.next;
  }
  return result;
}

// inpired by https://www.geeksforgeeks.org/reverse-a-linked-list/
function reverse(list){
  if(!list){
    return null;
  }
  let prev = null;
  let current = list;
  while(current != null){
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

// from codewar:
function reverse(list) {
  if (!list) return null

  let result
  for (let node = list; node; node = node.next) {
    result = new Node(node.data, result)
  }

  list.data = result.data
  list.next = result.next
}

// from codewar, by pushing everything into an array first
function reverse(list) {
    const values = [];
    let currentNode = list;
    while (currentNode) {
      values.push(currentNode.data);
      currentNode = currentNode.next;
    }
    currentNode = list;
    while (currentNode) {
      currentNode.data = values.pop();
      currentNode = currentNode.next;
    }
}
