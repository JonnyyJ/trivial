/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
 */
var threeSumClosest = function(nums, target) {
    let i, left, right, current, sum;
    let result = Number.MAX_SAFE_INTEGER;
    // tampered original
    nums.sort((a, b) => a - b);
    // two pointers
    for(i = 0; i < nums.length; i++){
        current = nums[i];
        left = i+1;
        right = nums.length-1;
        while(left < right){
            sum = current + nums[left] + nums[right];
            // get the closest sum
            if(Math.abs(target - sum) < Math.abs(target - result)){
                result = sum;
            }
            if(sum < target){
                left++;
            }else if(sum > target){
                right--;
            }else{
                return sum;
            }
        }
    }
    return result;
};