/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 1;
    for(var i=digits.length-1; i>=0; i--){
        digits[i] = digits[i] + carry;
        digits[i] = (digits[i]>=10)?(carry=1, digits[i]-10):(carry=0, digits[i]);
    }
    if(carry){ digits.unshift(1); } // note
    return digits;
};