/**
 * @param {number} n
 * @return {string[][]}
 * 1.Declare 3 sets, cols, pie, na equals to row, left slope, right slope
 * 2.If the index of queen in the cols, pie, or na, return false, if not, recursive.
 * 3.After recursive finished, we need to delete the index of cois, pie and na, finish the backtrack.
 */
var solveNQueens = function(n) {
    if (n < 1) return [];
    const r = [];
    const cols = new Set();
    const pie = new Set();
    const na = new Set();
    
    const dfs = (n, row=0, curState=[]) => {
      if (row >= n) {
        r.push(curState);
        return;
      }
      
      for (let col = 0; col < n; col++) {
        if (cols.has(col) || pie.has(row - col) || na.has(row + col)) continue;
        cols.add(col);
        pie.add(row - col);
        na.add(row + col);
        
        dfs(n, row + 1, curState.concat([col]));
        
        cols.delete(col);
        pie.delete(row - col);
        na.delete(row + col);
      }
    }
    
    const result = [];
    const gen = n => {
      for (let i = 0; i < r.length; i++) {
        result.push(r[i].map(_r => '.'.repeat(_r) + 'Q' + '.'.repeat(n - _r - 1)));
      }
    }
    
    dfs(n);
    gen(n);
    
    return result;
  };