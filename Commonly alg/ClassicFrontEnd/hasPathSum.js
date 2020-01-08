var hasPathSum = function (root, sum){
    if(!root) return false;
    let cur = sum - root.val
    if(!root.left && !root.right && cur == 0) return true;
    if(!root.left) return hasPathSum(root.right, cur);
    if(!root.right) return hasPathSum(root.left, cur);
    return hasPathSum(root.left, cur) || hasPathSum(root.right, cur)
}