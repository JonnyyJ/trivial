/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target){

    const numsMap = {};

    for(let i = 0; i < nums.length; i++){
        let solutionFound = numsMap[target-nums[i]];

        if(typeof solutionFound !== 'undefined'){
            return [solutionFound, i];
        }
        numsMap[nums[i]] = i;
    }
    return [];
}