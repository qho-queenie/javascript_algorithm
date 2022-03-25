//  Rotate List
//  Given the head of a linked list, rotate the list to the right by k places.
//
//  Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
//
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]


// is it always a singly-linked list? yes
// possible that k > length? yes
// possible thay k is zero? yes

// solution #1
// find the length of head
// finding the 2nd last node for every node, must be from the beginning, o(n)2

const rotateRight = (head, k) => {
    const length = getLength(head);
    if(!head || !head.next){
        return head;
    }

    if(k >length) {
        k = Math.ceil(k % length);
    }

    let j = k;
    let curr = head;
    let temp;

    while(j){
        let secondLastNode = length - 2;
        while(secondLastNode > 0) {
            secondLastNode--;
            curr = curr.next;

            if(!curr) {
                curr = head;
            }
        }

        // secondLastNode is found here, which is curr
        temp = new ListNode(curr.next.val);

        curr.next = null;
        temp.next = head;
        head = temp;
        j--;
        curr = head;
    }
    return head;
};

const getLength = head => {
    let length = 0;
    let curr = head;

    while(curr) {
        length++;
        curr = curr.next;
    }
    return length;
}

// solution #2
// double the length of head, by attaching a head's copy to head's tail
// length - 2 would be the position of the start of the result (since k is less than 5 after modulo)
// after finding the (new)head of the result, count length number of nodes


// k = 3
// [1,2,3,4,5]
// [1,2,3,4,5,1,2,3,4,5]

// cut off head at (length - k), which is the start of the result
// (5-3) == 2, start is at 3rd node
// then count length number of nodes, thats the result

// finding length is (o)n
// creating copy is 2(o)n
// operating to find the start of result, and counting length to cut off is 3(o)n
const rotateRight = (head, k) => {
    if(!head || !head.next){
        return head;
    }
    if(k % length === 0) {
        return head;
    }
    if(k >length) {
        k = Math.ceil(k % length);
    }
    let length = getLength(head);
    let headCopy = copyHead(head);
    let curr = headCopy;
    let resultHead;
    let newHead = length - k;
    while(newHead > 1) {
        curr = curr.next;
        newHead--;
    }

    resultHead = curr.next;


    let resultHeadCurr = resultHead;
    while(length > 1) {
        resultHeadCurr = resultHeadCurr.next;
        length--;
    }
    resultHeadCurr.next = null;
    return resultHead;
};

const copyHead = head => {
    let newHead = new ListNode();
    let newHeadCurr = newHead;
    let curr = head;

    while(curr) {
        newHeadCurr.next = new ListNode(curr.val);
        newHeadCurr = newHeadCurr.next;
        if(!curr.next) {
            break;
        } else {
            curr = curr.next;
        }
    }

    newHead = newHead.next;
    curr.next = newHead;

    return head;
}

const getLength = head => {
    let length = 0;
    let curr = head;

    while(curr) {
        length++;
        curr = curr.next;
    }
    return length;
}
