var maxProfit = function(prices){
    var max = 0;
    var len = prices.length;
    for( var i = 0; i < len - 1; i++){
        if(prices[i + 1] > prices[i]){
            max += prices[i + 1] - prices[i]
        }
    }
    return max;
}