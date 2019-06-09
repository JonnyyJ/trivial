/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    if (n<=1)return n;
    
    // --- 1 2 3 4 5 6 7 8 9 10 11 12
    // 1^2 1 2 3 4 5 6 7 8 9 10 11 12 <-
    // 2^2 - - - 1 2 3 4 2 3  4  5  3 <-
    // 3^2 - - - - - - - - 1  2  3  3 <-
    
    let matrix = [0]
    
    // compare self and up, take min
    for (let i=1; i*i<=n;i++){
        for (let j=i*i; j<=n; j++){
            if (i===1){
                matrix[j]=j;
            }else{
                let up = matrix[j];
                let currSquare=i*i;
                let currSquareNumbers = Math.floor(j/currSquare);
                let residue = j%currSquare;
                let current = currSquareNumbers + matrix[residue];
                
                matrix[j]=Math.min(up,current);
                
            }
            
        }
    }
    return matrix[n];
};