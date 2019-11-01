function binaryTreePaths(root) {
    var res = [];
    var prefix = [];
    
    traverse(root);
    return res;
    
    function traverse(n) {
        if (!n) {
            return;
        }
        
        prefix.push(n.val);
        
        if (!n.left && !n.right) {
            res.push(prefix.join('->'));
        } else {
            traverse(n.left);
            traverse(n.right);
        }
        
        prefix.pop();
    }
}