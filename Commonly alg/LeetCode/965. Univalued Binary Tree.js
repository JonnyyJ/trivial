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
var isUnivalTree = function(root){
    let isUnival = true;
    let rootValue = root.val;

    let traversal = function(node){
        if(!node){
            return;
        }
        if(node.val !== rootValue){
            isUnival = false;
            return;
        }
        traversal(node.left);
        traversal(node.right);
    };
    traversal(root);

    return isUnival;
};
var isUnivalTree = function(root){
    let isUnival = true;
    let rootValue = root.val;
}