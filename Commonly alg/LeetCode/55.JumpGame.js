/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let i = nums.length - 1;
    let k = 1;
    while (i - k >= 0) {
        if (nums[i - k] >= k) {
            i = i - k;   
            k = 1;
        } else {
            k += 1;
        }
    }   
    if (i === 0) {
        return true;
    }
    return false
};