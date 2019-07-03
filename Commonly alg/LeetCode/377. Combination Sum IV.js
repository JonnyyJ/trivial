/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    // sort the array
    nums.sort(function(a,b){
        return a - b;
    })
    // create a counter to track the number of ways
    let counter = 0;
    const memo = [1];
    for(let i = 1; i <= target; i++) {
        counter = 0;
        dfs(i);
        memo[i] = counter;
    }
    // create a helper func called dfs (index, leftTarget)
    function dfs(leftTarget) {
        // if memo has leftTarget return memo[leftTarget]
        if (memo[leftTarget] !== undefined) {
            counter += memo[leftTarget];
            return;
        }
        // if leftTarget = 0 counter + 1 return;
        if (leftTarget === 0) {
            counter += 1;
            return;
        }
        // for from 0 - nums len
        for(let i = 0; i < nums.length; i++) {
            // if nums[i] is greater than leftTarget break
            if (nums[i] > leftTarget) {
                break;
            }
            // dfs (lefttarget - nums[index])
            dfs(leftTarget - nums[i]);
            
        }
    }
    return memo[target];
};