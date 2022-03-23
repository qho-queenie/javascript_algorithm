// Remove Duplicates from Sorted List
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
//
// Input: head = [1,1,2]
// Output: [1,2]
//
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
//
// questions:
// empty head
// more than 2 copies of the dup?
// no dups at all?

// solution 1:
// exact all vals to a Set, create a new linked list with the Set
// downside 2 loops

// solution 2:
// loop thru the list, keep a boolen variable
// if equals to anchor node, var is true, set current to next until var is false
// if !== to anchor node, var is false, keep loopinng, move prev and current
// it is sorted, meaning if 1 !== 2, then 1 !== 3

var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;

    let prev = head;
    let curr = head.next;

    while(curr) {
        if(prev.val !== curr.val) {
            prev.next = curr;
            prev = curr;
        }
        curr = curr.next;
    }
    prev.next = curr;
    return head;
};
