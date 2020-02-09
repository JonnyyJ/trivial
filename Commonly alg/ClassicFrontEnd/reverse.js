var reverse = function(x){
    var num = x.toString().split('').reverse();
    var res = parseInt(num.join(''))
    if(res > 2**31) return 0
    return x > 0 ? res : -res
}