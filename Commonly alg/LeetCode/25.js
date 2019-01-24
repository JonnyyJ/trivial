/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:

Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const root = new ListNode();
    root.next = head;
    
    let prev = root; // prev.next --> start of group
    let i = 0;
    while (i < k && head) { // head --> start of next group
        head = head.next;
        i += 1;
        if (i === k) {
            const [reversedHead, reversedTail] = reverse(prev.next, k);
            prev.next = reversedHead;
            reversedTail.next = head;
            prev = reversedTail;
            i = 0;
        }
    }
    
    return root.next;
};

function reverse(head, length) {
    const tail = head;
    let prev = null;
    while (length > 0) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
        length -= 1;
    }
    return [prev, tail];
}