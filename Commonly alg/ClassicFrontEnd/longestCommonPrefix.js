var longestCommonPrefix = function(strs) {
    if(!strs.length) return ''
    var str1 = strs[0];
    var res = ''
    var str1Len = str1.length
    var strsLen = strs.length
    for (var i = 0; i < str1Len; i++){
        for(var j = 1; j < strsLen; j++){
            if( str1[i] !== strs[j][i]){
                return res;
            }
        }
        res+= str1[i]
    }
    return res
}