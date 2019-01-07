/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ret = '', i = 0, temp = strs[0];
    if (temp) [...temp].forEach(c => ret += (strs.every(w => w[i] === temp[i]))? temp[i++] : '')
    return ret;
};