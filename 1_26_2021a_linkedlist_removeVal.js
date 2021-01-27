// Remove node if equals to val, return head

var removeElements = function(head, val) {
    let newNode = new ListNode(null, head);
    head = newNode;

    let prev = head;
    let current = prev.next;

    while(current){
        if(current.val === val){
            prev.next = current.next;
            current = prev.next;
        }
        else {
            prev = current;
            current = current.next;
        }
    }
    return head.next;
};


var removeElements = function(head, val) {
    while(head && head.val === val){
        head = head.next;
    }
    if(!head) return null;

    let current = head;
    let next = head.next;
    while(next){
        if(next.val === val){
            current.next = next.next;
            next = current.next;
        }
        else{
            current = next;
            next = next.next;
        }
    }
    return head;
};
