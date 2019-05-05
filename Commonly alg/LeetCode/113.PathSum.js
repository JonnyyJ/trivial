/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let result =[];
    helperFunction(root,sum,[],result);
    return result;
};

var helperFunction = function(root,sum,pathVal,result){
    //base case 
    if(!root) return false;
    
    let newVal = sum - root.val;
    pathVal.push(root.val);
    
    if(!root.left && !root.right && newVal ===0){
        result.push(pathVal)

    }
    
   return  helperFunction(root.left, newVal,pathVal.slice(),result) || helperFunction(root.right, newVal,pathVal.slice(),result)
    
    
}
