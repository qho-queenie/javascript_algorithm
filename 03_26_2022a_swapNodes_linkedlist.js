//  Swapping Nodes in a Linked List
//
//  You are given the head of a linked list, and an integer k.
//
// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
//
// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]
//
// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]

// always a singly-linked? yes
// what if k is n / 2, n is an odd number? no need to swapNodes
// possible that k is 0? no, k >= 1
// possible that n is 0? no
// possible that n is 1? no



// solution #1
// create a array to store each node's value
// swap the 2 elements, (instead off a hash table, since array inherently is address-based)
// create a new list using the swapped array

const swapNodes = (head, k) => {
    let length = 1;
    let resultList = new ListNode();
    let resultCurr = resultList;
    let curr = head;
    let arr = [];

    while(curr) {
        arr.push(curr.val);
        curr = curr.next;
        length++;
    }

    [arr[k - 1], arr[length - k - 1]] = [arr[length - k - 1], arr[k - 1]];

    for(var i = 0; i < length - 1; i++) {
        let tempNode = new ListNode(arr[i]);
        resultCurr.next = tempNode;
        resultCurr = resultCurr.next;
    }

    return resultList.next;
}

// solution #2
// swapping the values instead of the nodes
// 2 pointers, fast walks k nodes and save the val of k
// when fast is at k, start walking slow until fast is null
// because fast has walked k steps, the rest fast's steps is the number of steps slow has to walk until slow reaches k from the end
// finally, set slow's value with the saved fast's val
// and fast's value to slow's val

// const swapNodes = (head, k) => {
//     let newHead = new ListNode(0, head);
//     let fast = newHead;
//     let slow = newHead;
//
//     while(k > 0) {
//         fast = fast.next;
//         k--;
//     }
//     let node1 = fast;
//
//     while(fast) {
//         slow = slow.next;
//         fast = fast.next;
//     }
//
//     let node2 = slow;
//
//     let temp = node2.val;
//     node2.val = node1.val;
//     node1.val = temp;
//
//     return newHead.next;
// }
