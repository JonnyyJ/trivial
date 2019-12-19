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
 * @return {number}
 */

    let pathSum = function(root, sum) {
        if (!root) return 0;
        return sumHelper(root, 0, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
    };
    
    let sumHelper = (root, pre, sum) => {
      if (!root) return 0;
      let total  = pre + root.val;
      return (total === sum) + sumHelper(root.left, total, sum) + sumHelper(root.right, total, sum);
    };

   let pathSum = (root, sum) =>{
     if(!root) return 0;
     return sumHelper(root, 0, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
   }
  
   let sumHelper = (root, pre, sum) =>{
     if (!root) return 0;
     let total = pre + root.val;
     return (total === sum) + sumHelper(root.left, total, sum) + sumHelper(root.right, total, sum)
   }