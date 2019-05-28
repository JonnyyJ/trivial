/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
  
    if (n < 1) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;

    // a saves the second-to-last sub-state data, b saves the first sub-state data, temp saves the current state data
    let a = 1, b = 2;
    let temp = a + b;
    for (let i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp; 
    }
    return temp; 
};