var addBinary = function (a, b ){
    var res = [];
    var num = 0;
    var addOne = 0;

    while(a.length < b.length){
        a = 0 + a
    }
    while(b.length < a.length){
        b = 0 + b;
    }
    for(var i = a.length - 1; i >= 0; i--){
        num = parseInt(a[i]) + parseInt(b[i]) + addOne;
        if(num>=2){
            res[i] = num - 2
            addOne = 1
        }else{
            res[i] = num
            addOne = 0
        }
    }
    if(addOne > 0){
        res.unshift(1)
    }
    return res.join('')
}