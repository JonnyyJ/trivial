/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) return [];
    let res = [];
    let map = {0: [0, 1], 1: [1, 0], 2: [0, -1], 3: [-1, 0]};
    let count = 0;
    let row = 0;
    let col = -1;
    while (res.length < matrix.length * matrix[0].length) {
      let navigation = map[count % 4];
      row += navigation[0];
      col += navigation[1];
      res.push(matrix[row][col]);
      matrix[row][col] = 'X';
      if (isBad(map, count, row, col, matrix)) {
        count++;
      }
    }
    return res;
  };
  
  function isBad (map, count, row, col, matrix) {
    let restriction = map[count % 4];
    let newRow = restriction[0] + row;
    let newCol = restriction[1] + col;
    if (newRow < 0 || newRow >= matrix.length) {
      return true;
    } else if (newCol < 0 || newCol >= matrix[0].length) {
      return true;
    } else if (matrix[newRow][newCol] === 'X') {
      return true;
    } else {
      return false;
    }
  }