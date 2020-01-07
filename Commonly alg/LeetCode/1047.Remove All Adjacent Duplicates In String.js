/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let arr = []
    for(i = 0; i < S.length; i++){
        if(!arr.length){
            arr.push(S[i])
        } else {
            S[i] == arr[arr.length - 1] ? arr.pop() : arr.push(S[i])
        }
    }
    return arr.join('')
};