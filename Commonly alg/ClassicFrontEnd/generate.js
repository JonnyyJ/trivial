var generate = function(numRows) {
    var res = [];
    for(var i = 0; i < numRows; i++){
        var arr = [1];
        for(var j = 1; j < i; j++){
            arr[j] = res[i-1][j] + res[i-1][j-1]
        }
        arr[i] = 1;
        res.push(arr)
    }
    return res;
}