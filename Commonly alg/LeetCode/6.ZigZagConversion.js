/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

const convert = (s, n) => {
    const res = []
    let r = 0, dir = n > 1 ? 1 : 0
    for (const c of s) {
        res[r] = res[r] || []
        res[r].push(c)
        if (r === 0 && dir === -1 || r === n - 1 && dir === 1) {
            dir *= -1
        }
        r += dir
    }
    return res.map(row => row.join('')).join('')
};