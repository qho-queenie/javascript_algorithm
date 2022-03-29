// Maximum Twin Sum of a Linked List
//
// In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.
// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.
// Given the head of a linked list with even length, return the maximum twin sum of the linked list.
//
// Input: head = [5,4,2,1]
// Output: 6
// Explanation:
// Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
// There are no other nodes with twins in the linked list.
// Thus, the maximum twin sum of the linked list is 6.
//
// Input: head = [4,2,2,3]
// Output: 7
// Explanation:
// The nodes with twins present in this linked list are:
// - Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
// - Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
// Thus, the maximum twin sum of the linked list is max(7, 4) = 7.
//
// Input: head = [1,100000]
// Output: 100001
// Explanation:
// There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.

// first solution comes to find is finding the length, and generate each twins then compare each sum
// bigO would be 2o(n)

const pairSum = head => {
    let HH = head;
    let curr;
    let length = getLength(head);
    let resetStop = length - 1;
    let times = length / 2;
    let resultArr = [];

    while(times > 0) {
        let stop = resetStop;
        for(curr = HH; stop > 0; curr = curr.next){
            stop--;
        }
        resultArr.push(HH.val + curr.val);
        HH = HH.next;
        resetStop = resetStop - 2;
        times--;
    }
    return Math.max(...resultArr);
};

const getLength = head => {
    let len = 0;
    let curr = head;

    while(curr) {
        curr = curr.next;
        len++;
    }

    return len;
}

// 2nd solution is finding the 2nd half of the list, reverse it,  and using 1 curr to walk thru both list and find the largest

// step 1: finding the middle node by using 2 pointer, results with 2 lists --> o(n)
// step 2: reverse the 2nd half list 0.5o(n)
// step 3: using 1 curr var, compare each sum  0.5o(n)

const pairSum = head => {
    let newHead = new ListNode();
    newHead.next = head;
    let slow = newHead;
    let fast = newHead;
    let half;

    while(fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    half = slow.next;
    slow.next = null;
    newHead = newHead.next;

    let resultHalf = new ListNode(half.val);

    half = half.next;
    while(half){
        let tmpNode = new ListNode(half.val);
        tmpNode.next = resultHalf;
        resultHalf = tmpNode;
        half = half.next;
    }

    let curr = newHead;
    let halfCurr = resultHalf;
    let largest = Number.NEGATIVE_INFINITY;

    while(curr && halfCurr){
        if(curr.val + halfCurr.val > largest) {
            largest = curr.val + halfCurr.val;
        }
        curr = curr.next;
        halfCurr = halfCurr.next;
    }
    return largest;
};
