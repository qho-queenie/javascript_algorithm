//  Rotate List
//  Given the head of a linked list, rotate the list to the right by k places.
//
//  Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
//
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]


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
