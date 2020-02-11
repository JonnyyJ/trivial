var countAndStay = function(n){
    var resultStr = '1'
    for(var i = 1; i < n; i++){
        var repeatCount = 1;
        var str = ''
        for(var j = 0; j < resultStr.length; j++){
            if(resultStr[j] === resultStr[j+1]){
                repeatCount++
            }else{
                str += repeatCount + resultStr[j]
                repeatCount = 1
            }
        }
        resultStr = str
    }
    return resultStr
}