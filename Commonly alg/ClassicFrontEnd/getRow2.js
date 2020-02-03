var getRow = function(rowIndex){
    var res = [1];
    if(rowIndex == 0 ) return [1];
    if(rowIndex == 1) {
        return[1,1]
    }
    var arr = getRow(rowIndex - 1);
    for(var i = 1; i < rowIndex; i++){
        res[i] = arr[i] + arr[i - 1];
    }
    res.push(1);
    return res;
}