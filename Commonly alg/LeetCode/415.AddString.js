/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let ret = '', carry = 0, i = num1.length - 1, j = num2.length - 1;
    while (i >= 0 || j >= 0 || carry === 1) {
        let n1 = i >= 0 ? num1[i--] : 0;
        let n2 = j >= 0 ? num2[j--] : 0;
        let sum = carry + n1 % 10 + n2 % 10;
        carry = Math.trunc(sum / 10);
        ret = (sum % 10) + ret;
    }
    return ret;
};