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

// the difference from the previous solution is, less vars because we have replaced
// previous with current.next.next, by checking current.next instead of current
var removeElements = function(head, val) {
    let newNode = new ListNode(null, head);
    let current = newNode;

    while(current && current.next){
      if(current.next.val === val){
        current.next = current.next.next;
      }
      else{
        current = current.next;
      }
    }
    return newNode.next;
};

// eliminates all possibilities that head can be val, check (always) check the 'next' one
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

// putting all non-val into a new linked list
var removeElements = function(head, val) {
    let newNode = new ListNode();
    let newCurr = newNode;
    let current = head;

    while(current){
        if(current.val !== val){
            newCurr.next = current;
            newCurr = newCurr.next;
        }
        current = current.next;
    }
    newCurr.next = null;
    return newNode.next;
};
