/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    var map = {};
    var res = [];
    for(let i =0; i< nums.length; i++) {
        if(!map[nums[i]]) map[nums[i]] = 1;
        else map[nums[i]]++;
    };
    
    for(let key in map) {
        if(map[key] > nums.length/3) res.push(key);
    };
    return res;

};