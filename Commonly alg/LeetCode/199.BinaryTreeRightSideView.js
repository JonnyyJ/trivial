/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function helper (root, level,  r) {
    if (root === null) {
        return;
    }
    if (r[level]) {
        r[level].push(root.val);
    } else {
        r.push([root.val]);
    }
    helper(root.left, level + 1, r);
    helper(root.right, level + 1, r);
}


var rightSideView = function(root) {
    const r = [];
    helper(root, 0, r);
    let result = [];
    for (const a of r) {
        result.push(a.pop());
    }
    return result;
};