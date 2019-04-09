/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = []
    backtrack(1, n, k, [], result)
    return result
};

function backtrack(start, end, k, temp, result) {
    if (temp.length === k) {
        result.push(temp.slice())
        return
    }
    
    for (let i = start; i <= end; i++) {
        temp.push(i)
        backtrack(i + 1, end, k, temp, result)
        temp.pop()
    }
}