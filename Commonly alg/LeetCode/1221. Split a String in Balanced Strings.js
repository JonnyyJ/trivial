var balancedStringSplit = function(s) {
    let count = 0;
    let res = 0;
    
    for(let letter of s) {
        if(letter == 'L') count++;
        else count--;
        
        if(count == 0) {
            res++;
        }
        
    }
    return res;
};