/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = (n) =>{
    const arr = new Array(n);
    arr.fill(false);
    let count = 0;
    if (n > 2) count = 1;
    for (let i = 3; i < n; i += 2){
        if(arr[i] === false){
            count ++;
            for (let j = 3; i * j < n; j+= 2){
                arr[i * j] = true;
            }
        }
    }
    return count;
};
