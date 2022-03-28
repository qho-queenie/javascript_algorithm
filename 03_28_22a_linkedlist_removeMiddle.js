// Delete the Middle Node of a Linked List
//
// You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
//
// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.
//
// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
//
// Input: head = [1,3,4,7,1,2,6]
// Output: [1,3,4,1,2,6]
// Explanation:
// The above figure represents the given linked list. The indices of the nodes are written below.
// Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
// We return the new list after removing this node.
// 
// Input: head = [1,2,3,4]
// Output: [1,2,4]
// Explanation:
// The above figure represents the given linked list.
// For n = 4, node 2 with value 3 is the middle node, which is marked in red.
//
// Input: head = [2,1]
// Output: [2]
// Explanation:
// The above figure represents the given linked list.
// For n = 2, node 1 with value 1 is the middle node, which is marked in red.
// Node 0 with value 2 is the only node remaining after removing node 1.

// possible there is only 1 node? yes, which returns empty since its the middle node
// solution #1:
// get length, and remove from length - 1
// bigO is 2(o)n, since there are 2 constant loops

// solution $2:
// 2 pointers technique, where fast node advances twice as fast as slow node,
// so when there is no more fast node, slow is in the middle
// the slightly tricky part is, in order to remove the middle node, we still need access to the middle's previous node
// which we can offset this 1 node by creating a dummy node before the head, and start from the dummy
// this way, we know we have reached the 1 node before the middle
// bigO is o(n), since there is 1 constant loop

const deleteMiddle = head => {
    let newHead = new ListNode(0);
    newHead.next = head;
    head = newHead
    let fast = head;
    let slow = head;
    let curr;

    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    curr = slow.next;
    slow.next = curr.next;

    return head.next;
};
