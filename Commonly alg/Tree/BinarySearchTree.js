/**
 * Binary search tree by ES6
 * 
 * 
 * 
 *  */
class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
   constructor(){
       this.root = null;
   }
   //insert(key): insert a new key in the tree.
   static insertNode(node, newNode){
       if(node.key > newNode.key){
           if(node.left === null){
               node.left = newNode;
           }else{
               BinarySearchTree.insertNode(node.left, newNode);
           }
       }else{
           if(node.right === null){
               node.right = newNode;
           }else{
               BinarySearchTree.insertNode(node.right, newNode);
           }
       }
   }



//search(key): qury a key in the tree, if it exist return true
//if not return false
  static searchNode(node, key){
      if(node === null){
          return false;
      }
      if(node.key === key){
          return true;
      }else if(node.key > key){
          BinarySearchTree.searchNode(node.left, key);
      }else if(node.key < key){
          BinarySearchTree.searchNode(node.right, key);
      }
  }
}

  
