/** 
 write a function that filters an array into a new array
 that includes only the valid palindromes, disregard spaces and capital lettters
 in your comparision.

 
 
 
*/

var palindromesEle = function(array){
    if(array.length == 0) return
    array.filter(isPalindrome())
}

function isPalindrome(){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}