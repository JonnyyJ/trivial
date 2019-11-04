function isValidSerialization(preorder) {
    const arr = preorder.split(',');
    let i = 0;
    return dfs() && i === arr.length;
    
    function dfs() {
      if (i === arr.length) return false;
      if (arr[i++] === '#') return true;
      return dfs() && dfs();
    }
  }