/**
 * @param {number} N
 * @return {number}
 */
function countArrangement(N) {
    let count = 0;
    const used = [];
    dfs(1);
    return count;
    
    function dfs(idx) {
      if (idx > N) {
        count++;
        return;
      }
      
      for (let i = 1; i <= N; i++) {
        if (used[i]) continue;
        if (i%idx !== 0 && idx%i !== 0) continue;
        used[i] = true;
        dfs(idx+1);
        used[i] = false;
      }
    }
  }