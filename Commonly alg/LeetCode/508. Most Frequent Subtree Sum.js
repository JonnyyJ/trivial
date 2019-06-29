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
let map;
let mx;
function postor(root){
    if(root==null)
        return 0;
    let l=postor(root.left);
    let r=postor(root.right);
    let s=l+r+root.val;
    
    if(map.has(s)){
        let temp=map.get(s);
        map.set(s,temp+1);
    }
    else{
        map.set(s,1);        
    }  
     
    mx=Math.max(map.get(s),mx);
    
    return s;
        
}
var findFrequentTreeSum = function(root) {
    map=new Map();
    map.clear();
    mx=-1;
    postor(root);
    let res=new Array();
    for(let [key,value] of map){
        if(value ===mx)
            res.push(key);
    }
    return res;
    
};