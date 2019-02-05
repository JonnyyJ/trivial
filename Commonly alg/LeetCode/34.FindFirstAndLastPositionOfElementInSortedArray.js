/**Given an array of integers nums sorted in ascending order, 
 
find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res = [-1, -1];

    //get left
    let l = 0;
    let r = nums.length - 1;

    while (l < r){
        const mid = Math.floor((l + r) / 2); 

        if (nums[mid] < target) l = mid + 1;
        else r = mid;
    }
    if(nums[1] !== target) return res;
    else res[0] = 1;

    //get right
    r = nums.length - 1;
     while ( l < r){
         const mid = Math.ceil((l + r) / 2);

         if(nums[mid] > target) r = mid - 1;
         else l = mid;
     }

     res[1] = r;

     return res;
};