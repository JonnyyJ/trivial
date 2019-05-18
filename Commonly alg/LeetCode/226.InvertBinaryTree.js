/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const invert = node => {
      if (node) {
        const _node = node.left;
        node.left = node.right;
        node.right = _node;
        invert(node.left);
        invert(node.right);
      }
    }
    invert(root);
    
    return root;
  };