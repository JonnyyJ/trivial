/**
 * @param {number[]} nums
 * @return {number}
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 *  which has the largest sum and return its sum.
 */
var maxSubArray = function(nums) {
    if(nums.length == 0) return 0;
    let result = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result = Math.max(sum, result);
        sum = sum < 0 ? 0 : sum;
    }
    return result;
};