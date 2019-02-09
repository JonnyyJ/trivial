/**
 * Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.*/
var combinationSum = function(candidates, target) {
    const list = []
    backtrack(candidates.sort((a, b) => a - b), 0, target, [], list)
    return list
};
function backtrack(candidates, index, target, subset, list) {
    if (target === 0) {
        list.push(subset.slice())
    }
    if (target <= 0 || candidates[index] > target) {
        return
    }
    for (let i = index; i < candidates.length; i++) {
        subset.push(candidates[i])
        backtrack(candidates, i, target - candidates[i], subset, list)
        subset.pop()
    }
}