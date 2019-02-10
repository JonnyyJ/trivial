/**
 * Given a collection of candidate numbers (candidates) and 
 * a target number (target), 
 * find all unique combinations in candidates where the candidate numbers sums to target.
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const list = []
    backtrack(candidates.sort((a, b) => a - b), 0, target, [], list)
    return list
};
function backtrack(candidates, index, target, subset, list){
    if (target === 0){
        list.push(subset.slice())
    }
    if (target <= 0 || index >= canditates.length){
        return
    }
    const value = candidates[index]
    subset.push(value)
    backtrack(candidates, index + 1, target - value, subset, list)
    subset.pop()
    while (index < candidates.length && candidates[index] === value){
        index += 1
    }
    backtrack(candidates, index, target, subset, list)
}