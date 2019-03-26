/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const dp = initializeDp(word1, word2)
    constructDp(dp, word1, word2)
    return dp[word1.length][word2.length]
}

const initializeDp = (word1, word2) => {
    const dp = Array(word1.length + 1).fill().map(() => Array(word2.length + 1).fill())
    const rows = dp.length
    const cols = dp[0].length
    for (let i = 0; i < rows; i++) {
        dp[i][0] = i
    }
    for (let i = 1; i < cols; i++) {
        dp[0][i] = i
    }
    return dp
}

const constructDp = (dp, word1, word2) => {
    const rows = dp.length
    const cols = dp[0].length
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
            }
        }
    }
}