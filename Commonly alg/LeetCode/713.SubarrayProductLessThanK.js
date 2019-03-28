/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count = 0;
    for (let low = 0, high = 0, acc = 1; high < nums.length; high += 1) {
        acc *= nums[high];
        while (acc >= k) { // Shrink window
            acc /= nums[low];
            low += 1;
        }
        count += Math.max(0, high - low + 1);
    }
    return count;
};