/**
 * Given an unsorted integer array, 
 * find the smallest missing positive integer.
 */

 //Filter：Remove all elements less than 0.
 //Remove all duplicate elements
 //Sort: Reorder the array
 //Determine which smallest element is missing.
  var firstMissingPositive = function(nums){
      nums = nums.filter(_n => _n > 0);
      nums = nums.filter((v, i, arr) => arr.indexOf(v) === i);
      nums.sort((a, b) => a - b);
      for (let i = 1; i <= nums.length; i++){
          if (nums[i - 1] !== i) return i;
      }
      return nums.length + 1;
  }