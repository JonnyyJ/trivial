/*
Given a sorted array nums, 
remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, 
you must do this by modifying the input array in-place with O(1) extra memory.


*/
//Regular way
var removeDuplicates = function(nums) {
    let l = r = 0;
    while (r < nums.length){
        nums[l] = nums[r];
        l++, r++;
        while (nums[r] == nums[r - 1]){
            r++;
        }
    }
    return l;
};

//Fancy way
var removeDuplicates1 = function(nums){
    for (i = 0; 1<nums.length; i++) {
        if(nums[i] == nums[i+1]) {
            nums.splice(i, 1);
            i--;
        }
    }
}