/**
 * Given a sorted array and
 *   a target value, return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    //boundary condition
    if(nums[0] >= target){return 0;}
    if(nums[nums.length - 1] < target){return nums.length;}

    for(let i = 0; i < nums.length; i++){
        let next = nums[i + 1];
        if(next == target || (nums[i] < target && next > target))
        return i + 1;
    }
};