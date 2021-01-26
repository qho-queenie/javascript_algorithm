// find out if a linked list has a cycle, and return it
const detectCycle = function(head) {
    let hash = new Set();
    let current = head;

    while(current){
        if(hash.has(current)){
            return current;
        }
        else{
            hash.add(current);
            current = current.next;
        }
    }
    return null;
};

// const detectCycle = function(head) {
//     const hashSet = new Set();
//     while (head) {
//         hashSet.add(head);
//         if (hashSet.has(head.next)) {
//             return head.next;
//         }
//         head = head.next;
//     }
//     return null;
// };
