/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const result = [];
    const total = [];
    const seen = new Set();
    findSubsequencesRec(nums, 0, result, total, seen);
    
    return total;
};

var findSubsequencesRec = function(nums, start, result, total, seen) {
    if(result.length > 1  && !seen.has(result+'')) {
        seen.add(result+'');
        total.push(result.concat([]));
    }
    for (let i = start; i < nums.length; i++) {
        
        if(result.length === 0 || result[result.length - 1] <= nums[i]) {
            result.push(nums[i]);
            findSubsequencesRec(nums, i + 1, result, total, seen);
            result.pop();
        }
    }
};