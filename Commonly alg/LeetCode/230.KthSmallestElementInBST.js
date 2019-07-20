/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = (root, k) =>{
    let result = [];
    helper(root)
    return result[k - 1];
    
    function helper(node) {
        if (!node) return;
        if (result.length >= k) return;
        
        helper(node.left);
        if (result.length >= k) return;
        result.push(node.val);
        helper(node.right);
    }
};

