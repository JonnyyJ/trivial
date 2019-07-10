/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0
    while(i < nums.length) {
        if(nums[i] === 0) {
            let j = i + 1
            while(j < nums.length && nums[j] === 0){
                j += 1
            }
            if(j === nums.length) return
            nums[i] = nums[j]
            nums[j] = 0
            i += 1
        } else {
            i += 1
        }
    }
};