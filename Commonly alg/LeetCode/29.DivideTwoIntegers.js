/**
 * Given two integers dividend and divisor, divide two integers without using multiplication, 
 * division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.
 *  */

var divide = function(dividend, divisor) {
    const MIN = Math.pow(-2, 31), MAX = Math.pow(2, 31) - 1
    sign1 = dividend >= 0 ? 1 : -1
    sign2 = divisor >= 0 ? 1 : -1
    if(dividend > MAX || divisor > MAX)
        return MAX
    else if(dividend < MIN || divisor < MIN)
        return MIN
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)

    let ans = __divide(dividend, divisor)

    ans = ans * sign1 * sign2
    if (ans < MIN)
        ans = MIN
    else if(ans > MAX)
        ans = MAX
    return ans

    function __divide(dividend, divisor) {
        let ans = 0
        let origin_divisor = divisor
        let factor = 1
        while(dividend >= divisor) {
            ans += factor
            dividend -= divisor
            divisor += divisor
            factor += factor
        }
        if (dividend >= origin_divisor)
            ans += __divide(dividend, origin_divisor)
        return ans
    }
};