/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Given an array nums of n integers, are there elements a, b, c in nums 
 * such that a + b + c = 0? Find all unique triplets in the array 
 * which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.
 */

var threeSum = function(nums) {
let save = []
nums.sort((a, b) => a - b)
for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
        if (l - i > 1 && nums[l] === nums[l - 1]){
            l++;
            continue;
        }
        let sum = nums[i] + nums[l] + nums[r];
        if (sum === 0) {
            save.push([nums[i], nums[l], nums[r]]);
        }
        if (sum > 0) r--;
        else l++;
    }
}
return save
};
