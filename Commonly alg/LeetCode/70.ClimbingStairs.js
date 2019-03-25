/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 0 || n === 1) return 1;
    if(n === 2) return 2;
    let count = 2;
    let prev = 2;
    let prevPrev = 1;
    let sum = 0;
    while(count < n){
        sum = prev + prevPrev;
        prevPrev = prev;
        prev = sum;
        count++;
    }
    return sum;
    
};