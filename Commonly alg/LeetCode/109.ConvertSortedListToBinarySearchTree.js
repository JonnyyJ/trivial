/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */


var sortedListToBST = function(head) {
    const nodes = [];
    while (head) {
      nodes.push(head.val);
      head = head.next;
    }
    
    const tree = (arr) => {
      if (arr.length === 0) return null;
      const node = new TreeNode();
      if (arr.length === 1) {
        node.val = arr[0];
      } else {
        const mid = parseInt(arr.length / 2, 10);
        node.val = arr[mid];
        node.left = tree(arr.slice(0, mid));
        node.right = tree(arr.slice(mid + 1));
      }
      return node;
    }
    
    const root = tree(nodes);
    
    return root;
  };