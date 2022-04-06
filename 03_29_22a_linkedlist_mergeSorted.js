// Merge k Sorted Lists
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
//
// Merge all the linked-lists into one sorted linked-list and return it.
//
// Example 1:
//
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//  1->4->5,
//  1->3->4,
//  2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:
//
// Input: lists = []
// Output: []
// Example 3:
//
// Input: lists = [[]]
// Output: []

// no lists -> return lists itself
// lists only have 1 linked list -> return the only linked list

// solution #1:
// as long as none of the ll is empty:
// push the head of each ll to an array, and find the min to attach to a result ll
// the tricky and essential part is which ll to remove its head: get the index of the min value, and remove that index's head by
// lists[indexOfMin] = lists[indexOfMin].next
// if the ll is already empty/emptied, push Number_POSITIVE_INFINITI to the temp arr, so it will never be picked as the min
// bigO = o(n2) for checking if lists are not empty each round
// another o(n2) for grabbing the head of each ll
// o(n)? for find min
// o(n)? for finding index of min

const mergeKLists = lists => {
    let tempArr = [];
    let tempMin;
    let tempMinIndex;
    let resultList = new ListNode(0);
    let resultCurr = resultList;
    const noEmptyLists = list => !list;

    if(lists.length === 1) {
        return lists[0];
    }

    // while any of the lists[i] !== null
    while(lists.every(noEmptyLists) === false) {

        for(var i = 0; i < lists.length; i++){
            if(!lists[i]) {
                tempArr.push(Number.POSITIVE_INFINITY);
            } else {
                tempArr.push(lists[i].val);
            }
        }
        tempMin = Math.min(...tempArr);
        resultCurr.next = new ListNode(tempMin);
        resultCurr = resultCurr.next;

        tempMinIndex = tempArr.indexOf(tempMin);

        lists[tempMinIndex] = lists[tempMinIndex].next;
        tempArr = [];
    }
    return resultList.next;
};
