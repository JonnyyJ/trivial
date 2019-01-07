/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * Given a linked list, remove the n-th node from the end of list and return its head.
 */
var removeNthFromEnd = function(head, n) {
    let nodeToReturn = head;
    
    //Have two pointers, one that is n ahead of the other
    let pointer1 = head;
    let pointer2 = head;
    
    //Move pointer2 to be n ahead
    for(let i = 0; i<n;i++){
        pointer2 = pointer2.next;
    }
    
    //If pointer2 doesn't exist, that means we must remove the head of the list
    if(!pointer2){
        return nodeToReturn.next;
    }
    
    //Move both pointers until pointer2 reaches the end
    while(pointer2.next){
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    //Save the node two places ahead of pointer1;    
    pointer1.next = pointer1.next.next;
    
    return nodeToReturn;
};