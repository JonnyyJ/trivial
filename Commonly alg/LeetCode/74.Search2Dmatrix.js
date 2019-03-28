/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
      const v = matrix[i];
      if (target < v[0]) return false;
      if (target <= v[v.length - 1]) return v.includes(target);
    }
    
    return false;
  };