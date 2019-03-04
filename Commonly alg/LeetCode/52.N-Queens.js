/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let isValid = para => {
        for(let row=0; row<para.r; ++row) {
            if(para.board[row][para.c]==='Q') return false;
        }
        for(let r=para.r-1, c=para.c-1; r>=0 && c>=0; --r,--c) {
            if(para.board[r][c]==='Q') return false;
        }
        for(let r=para.r-1, c=para.c+1; r>=0 && c<para.board.length; --r,++c) {
            if(para.board[r][c]==='Q') return false;
        }
        return true;
    };
    
    let dfs = para=>{
        if(para.r==para.board.length) return 1;
        
        let res = 0;
        for(let c=0; c<para.board.length; ++c) {
            if(isValid({'board': para.board, 'r':para.r, 'c':c})) {
                para.board[para.r][c] = 'Q';
                res +=  dfs({'board':para.board, 'r':para.r+1});
                para.board[para.r][c] = '.';
            }
        }
        return res;
    };
    
    let board = new Array(n);
    for(let i=0; i<n; ++i) {
        board[i] = new Array(n);
    }
    for(let i=0; i<n; ++i) {
        for(let j=0; j<n; ++j) {
            board[i][j] = '.';
        }
    }
    
    return dfs({'board': board, 'r': 0});
};