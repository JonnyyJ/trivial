/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = nums => {
    
    if(nums.length === 0) return 0;
    //if the length of array is 1, return the only element of the array
    if(nums.length === 1) return nums[0];
    let totals = [nums[0], Math.max(nums[0], nums[1])];
    //if the length of array is n, return the larger of the 'array length n-2 result + array length n' and 'array length n-1 result'.
    for(let i = 2; i < nums.length; i++){
        totals[i] = Math.max(totals[i - 1], totals[i - 2] + nums[i]);
    }
    return totals[totals.length - 1];
};