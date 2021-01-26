// Write a program to find the node at which the intersection of two singly linked lists begins.

// just like bubble-sort, check all nodes of both linked list
var getIntersectionNode = function(headA, headB) {
    let ACurrent = headA;
    let BCurrent = headB;

    while(ACurrent){
        while(BCurrent){
            if(ACurrent == BCurrent){
                return ACurrent;
            }
            else{
                BCurrent = BCurrent.next;
            }
        }
        BCurrent = headB;
        ACurrent = ACurrent.next;
    }
    return null;
};



var getIntersectionNode = function(headA, headB) {
    let ACurrent = headA;
    let BCurrent = headB;
    let hashA = [];

    while(ACurrent){
        hashA.push(ACurrent);
        ACurrent = ACurrent.next;
    }
    while(BCurrent){
        if(hashA.includes(BCurrent)){
            return BCurrent;
        }
        else{
            BCurrent = BCurrent.next;
        }
    }
    return null;
};


//2 pointers:
// var getIntersectionNode = function(headA, headB) {
//     if(!headA || !headB) return null;
//
//     let currA = headA;
//     let currB = headB;
//
//     while(currA != currB) {
//         currA = !currA ? headB : currA.next;
//         currB = !currB ? headA : currB.next;
//     }
//     return currA
// };
