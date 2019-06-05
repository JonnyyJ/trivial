/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = (matrix, target) => {
     // base case
  if (matrix.length < 1) {return false;}
  if (matrix[0] && matrix[0][0] <= target &&  matrix[0][matrix[0].length-1] >= target) {
    for (let i = 0; i < matrix[0].length; i++) {
      if (matrix[0][i] === target) {return true;}
    }
  }
  // remove first array in matrix 
  matrix.shift();
  // recurse 
  return searchMatrix(matrix, target);
};