/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = (a, b) => {
    let aRunner = a.length - 1,
      bRunner = b.length - 1,
      result = [],
      carry = 0,
      resultIndex = a.length + b.length;
    while (aRunner >= 0 || bRunner >= 0) {
      const store =
        parseInt(a[aRunner--] || 0) + parseInt(b[bRunner--] || 0) + carry;
      const newDigit = store % 2;
      carry = Math.floor(store / 2);
      result[resultIndex--] = newDigit;
    }
    if (carry) {
      result = [carry].concat(result);
    }
  
    return result.join("");
  };