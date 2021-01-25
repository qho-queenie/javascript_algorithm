// Linked List Cycle
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
//
// There is a cycle in a linked list if there is some node in the list that can be
// reached again by continuously following the next pointer. Internally, pos is used
// to denote the index of the node that tail's next pointer is connected to. Note
// that pos is not passed as a parameter.
//
// Return true if there is a cycle in the linked list. Otherwise, return false.



// the main take away from using Set is, Set doesn't only check duplicate values,
// it also checks a reference to a (visited) node.
// In this case, duplicate values can be different nodes.
var hasCycle = function(head) {
    let hash = new Set();
    let current = head;

    while(current){
        if(hash.has(current)){
            return true;
        }
        else{
            hash.add(current);
            current = current.next;
        }
    }
    return false;
};


var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow){
            return true;
        }
    }
    return false;
};
