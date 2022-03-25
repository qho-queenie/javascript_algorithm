Middle of the Linked List
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// solution #1:
// get length, return Math.ceil(n/2) or n/2 + 1
// 2 loops, 2(o)n or 1.5(o)n

// solution #2:
// 2 pointer: slow progresses at n + 1, fast progresses at m + 2
// when fast.next === null, slow is at the middle node so return slow
// because m is always at the double of n
// 1 loop, o(n)

// possible that there is no node? no, there is at least 1 node


const middleNode = head => {
    if(head.next === null) {
        return head;
    }
    let fast = head;
    let slow = head;

    while(fast.next !== null) {
        if(fast.next.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        } else {
            return slow.next;
        }

    }
    return slow;
}
