/*Suppose an array sorted in ascending order is rotated at some pivot 

unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become 

([4,5,6,7,0,1,2]). You are given a target value to search. 

If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).
 @param {number[]} nums
 @param {number} target
 @return {number}
*/
var search = function(nums, target) {
   if(!nums|| nums.length === 0)
      return -1;
   let start = 0;
   let end = nums.length - 1;
   let mid;
   while(start + 1 < end){
       let mid = start + Math.floor((end - start) / 2);
       if (target === nums[mid]) 
       return mid;
       if(nums[start] < nums[mid]){
           if(nums[start] <= target && target <= nums[mid]){
               end = mid;
           } else{
               start = mid;
           }
       } else{
           if (nums[mid] <= target && target <= nums[end]){
               start = mid;
           } else{
               end = mid;
           }
       }
   }
   if(nums[start] === target)
     return start;
   if(nums[end] === target)
     return end;
     return -1;

};