/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const root = {};
    root.next = head;
    let prev = root;
    let cur = root.next;
    while (cur) {
      if (cur.val === val) {
        prev.next = cur.next;
        cur = cur.next;
      } else {
        prev = cur;
        cur = cur.next;
      }
    }
    
    return root.next;
  };

  var test