/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */


var maxDepth = function(root) {
    if (root === null) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
