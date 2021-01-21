Given the head of a linked list, remove the nth node from the end of the list and return its head.

var removeNthFromEnd = function(head, n) {
    let findLength = head => {
        let length = 0;
        let current = head;
        while(current){
            length++;
            current = current.next;
        }
        return length;
    }

    if(head === null) return head;
    let toDel = findLength(head) - n + 1;

    if(toDel === 1){
        head = head.next;
        return head;
    }

    let prev = head;
    let current = prev.next;

    while (toDel > 2){
        prev = current;
        current = current.next;
        toDel--;
    }
    prev.next = current.next;
    return head;
};
