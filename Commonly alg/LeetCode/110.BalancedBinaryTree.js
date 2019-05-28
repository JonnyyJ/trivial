/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isBalanced = root => {
    const logic = root => {
      if (root === null) {
        return [true, 0];
      }
  
      const [leftBalanced, leftHeight] = logic(root.left);
      const [rightBalanced, rightHeight] = logic(root.right);
  
      return [
        leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) < 2,
        1 + Math.max(leftHeight, rightHeight)
      ];
    };
  
    const [balanced, _] = logic(root);
    return balanced;
  };