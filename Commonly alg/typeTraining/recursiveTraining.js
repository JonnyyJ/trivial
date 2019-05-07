//write a function that accepts a string of strings and returns a string which reverses the original string.

function reverse(str){
    if(str.length <=1) return str;
    return reverse(str.slice(1)) + str[0];
}
reverse('abc')

//write a function that accepts a string of strings and compares one character from the front and back, if they are equal, it returns true, if not it returns false.
function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
var str = 'abba'
isPalindrome(str)