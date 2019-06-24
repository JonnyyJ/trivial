/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    
  let dupHash = {};
  let stack = [];
  let tempStack = [];
  
  // keep count of each unique alphabet
  for(let i = 0; i < s.length; i++){
    if(!dupHash[s[i]]){
      dupHash[s[i]] = [];
    }
    
    dupHash[s[i]] = +dupHash[s[i]] + 1;
  }
  
  
  // key idea: 
  // run in sequence of original string
  // if current alphabet not already included... include it
  // else if current alphabet is preset... ignore it
  // else while current alphabet is lex-less than previously added alphabets AND that previous alphabet is available ahead in the string... pop the previous such alphabets.. and push current alphabet
  
  for(let i = 0; i < s.length; i++){
    if(stack.length == 0 || stack[stack.length - 1] <= s[i]){
      if(!stack.includes(s[i])){
        stack.push(s[i]);
      }
    } 
    else if(!stack.includes(s[i])) {
      
      let isRevert = false;
      tempStack = [];
      while(stack[stack.length - 1] >= s[i] && dupHash[stack[stack.length - 1]] >= 1){
        
        if(stack[stack.length - 1] == s[i]){
          isRevert = true;
          break;
        }
        
        tempStack.push(stack.pop());
      }
      
      if(isRevert){
        while(tempStack.length > 0){
          stack.push(tempStack.pop());
        }
      }
      else {
          stack.push(s[i]);
      }
      
      
    }
    
    
    dupHash[s[i]] = +dupHash[s[i]] - 1;
  }
  
  
  return stack.join("");
    
};
