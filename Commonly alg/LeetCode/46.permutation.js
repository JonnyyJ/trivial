/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 //backtrack solution for comparision
 var permute = function(nums) {
    const res = [];
    backtrack(nums, res);
    return res;
};

function backtrack(nums, res, n = 0) {
    if (n === nums.length - 1) {
        res.push(nums.slice(0));
        return;
    }
    for (let i = n; i < nums.length; i++) {
        [nums[i], nums[n]] = [nums[n], nums[i]];
        backtrack(nums, res, n + 1);
        [nums[i], nums[n]] = [nums[n], nums[i]];
    }
}

var test = function(nums){
    const res = [];
    backtrack(nums, res);
    return res;
}

//DP solution
var permute = function(nums, n = 0) {
    if (n >= nums.length) return [[]];
    const res = [];
    const prevs = permute(nums, n + 1);  // permutations of elements after n
    for (let prev of prevs) {
        for (let i = 0; i <= prev.length; i++) {
            let p = prev.slice(0);
            p.splice(i, 0, nums[n]);  // successively insert element n
            res.push(p);
        }
    }
    return res;
};