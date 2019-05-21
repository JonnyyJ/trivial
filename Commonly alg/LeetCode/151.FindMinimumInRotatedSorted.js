/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = nums.length - 1;
    while(right - left > 1){
        let mid = left + ((right - left)>>1);
        if(nums[mid] > nums[right]){
           left  = mid;
        }else{
            right = mid;
        }
    }
    return Math.min(nums[left], nums[right]);
};