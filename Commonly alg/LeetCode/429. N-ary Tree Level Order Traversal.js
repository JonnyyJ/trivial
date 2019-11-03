var levelOrder = function(root) {
    let levels = [];
    
    function putLevels(root, depth){
        if(root){
            if(!levels[depth]){
                levels[depth] = [];
            }
            levels[depth].push(root.val);
        }
        depth++;

        for(let i = 0; i < root.children.length; i++)
            putLevels(root.children[i], depth);
    };
    
    if(root)
         putLevels(root, 0);
    return levels;
};