/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    let max=0;
    for(let item of nums){
        for(let i=0;i<nums.length;i++){
            max=Math.max(max,item^nums[i]);
        }
    }
    return max;
};