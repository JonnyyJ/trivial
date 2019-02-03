/**
 * You are given a string, s, and a list of words, words, 
 * that are all of the same length. Find all starting indices of substring(s) 
 * in s that is a concatenation of each word in words exactly once 
 * and without any intervening characters.
 */
var findSubstring = function(s, words) {
    if(s.length == 0 || words.length ==0){
        return [];
    }
    var len = words.length*words[0].length;
    if(s.length < len){
        return [];
    }
    var  result = [];
    for(let i = 0; i < s.length - len + 1; i++){      
        str = s.substr(i, len);    
        // console.log('str: ', str);
        if(isConcatenation(str, words)){
            result.push(i);
            // console.log('result: ',result);
        }
        
    }
    // console.log('result',result);
    return result;
};
function isConcatenation(str, words){
    var arr = [];
    var re = new RegExp('[a-zA-Z]{' + words[0].length +'}','g');
    str.replace(re,function($$){arr.push($$)});
    return arr.sort().toString()==words.sort().toString();
}