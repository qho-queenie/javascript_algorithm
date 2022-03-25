// Given a singly linked list, group all odd nodes together followed by the even nodes.
//Please note here we are talking about the node number and not the value in the nodes.
//
// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
//
// Example 1:
// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL
//
// Example 2:
// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL

//allocating extra memory with 1 pass:
var oddEvenList = function(head) {
    let current = head;
    let evenList = new ListNode(null);
    let evenCurrent = evenList;

    if(!current)return null;

    while(current.next && current.next.next){
        evenCurrent.next = new ListNode(current.next.val);
        current.next = current.next.next;
        evenCurrent = evenCurrent.next;
        current = current.next;
    }
    if(current.next !== null){
        evenCurrent.next = current.next;
    }
    current.next = evenList.next
    return head;
};


var oddEvenList = function(head) {
    if(!head)return null;
    let oddCurrent = head;
    let evenList = head.next;
    let evenCurrent = evenList;

    while(oddCurrent.next && evenCurrent.next){
        oddCurrent.next = oddCurrent.next.next;
        evenCurrent.next = evenCurrent.next.next;

        oddCurrent = oddCurrent.next;
        evenCurrent = evenCurrent.next;
    }

    oddCurrent.next = evenList;
    return head;
};
