import { fbind } from "q";

/**
 * @param {number[]} nums
 * @return {number[][]}
 * Given a collection of numbers that might contain duplicates,
 *  return all possible unique permutations.

 */
//For each level of a tree, if we already store permutation results of a node, we can skip other nodes with the same value.
var permuteUnique = function(nums) {
    nums.sort((n1, n2) => n1 - n2);
    const results= [];
    find(nums, [], results);
    return results;
};

function find(nums, cur, results){
    if(cur.length === nums.length){
        const result = cur.map(i => nums[i]);
        results.push(result);
        return;
    }
    const curLevel = [];
    for(let i = 0; i < nums.length; i++){
        if(cur.includes(i)) continue;
        if(curLevel.includes(nums[i])) continue;
        curLevel.push(nums[i]);
        cur.push(i);
        find(nums, cur, results);
        cur.pop();
    }

}