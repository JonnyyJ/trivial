/**
 * @param {number} n
 * @return {number[][]}
 * Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
 */
var generateMatrix = function(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr[i] = [];
      for (let j = 0; j < n; j++) {
        arr[i][j] = 0;
      }
    }
    
    let k = 1;
    const dirs = ['right', 'down', 'left', 'up'];
    const func = (i=0, j=0, dir=0) => {
      if (k > n * n) return;
      if (dirs[dir % 4] === 'right') {
        while (arr[i] && arr[i][j] === 0) {
          arr[i][j++] = k++;
        }
        func(i + 1, j - 1, dir + 1);
      } else if (dirs[dir % 4] === 'down') {
        while (arr[i] && arr[i][j] === 0) {
          arr[i++][j] = k++;
        }
        func(i - 1, j - 1, dir + 1);
      } else if (dirs[dir % 4] === 'left') {
        while (arr[i] && arr[i][j] === 0) {
          arr[i][j--] = k++;
        }
        func(i - 1, j + 1, dir + 1);
      } else {
        while (arr[i] && arr[i][j] === 0) {
          arr[i--][j] = k++;
        }
        func(i + 1, j + 1, dir + 1);
      }
    }
    
    func();
    
    return arr;
  };