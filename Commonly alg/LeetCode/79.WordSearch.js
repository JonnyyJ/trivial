/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
    const dfs = (X, Y, index) => {
      if (index === word.length) {
        return true;
      }
      if (
        X < 0 ||
        X >= board.length ||
        Y < 0 ||
        Y >= board[X].length ||
        board[X][Y] !== word[index]
      ) {
        return false;
      }
  
      const temp = board[X][Y];
      board[X][Y] = "";
  
      const result =
        dfs(X + 1, Y, index + 1) ||
        dfs(X - 1, Y, index + 1) ||
        dfs(X, Y - 1, index + 1) ||
        dfs(X, Y + 1, index + 1);
  
      board[X][Y] = temp;
      return result;
    };
  
    for (let X = 0; X < board.length; X++) {
      for (let Y = 0; Y < board[X].length; Y++) {
        if (dfs(X, Y, 0)) {
          return true;
        }
      }
    }
  
    return false;
  };