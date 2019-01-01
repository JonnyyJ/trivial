/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//fancy solution, 52ms
 var twoSum = function(nums, target){
      

    const numsMap={};
    for(let i = 0; i < nums.length; i++){
        let solutionFound = numsMap[target - nums[i]];
        if(typeof solutionFound !== 'undefined'){
            return [solutionFound, i];
        }
        numsMap[nums[i]] = i;
    }
    return [];
}

//regular solution, runtime: 120ms
var twoSum = function(nums, target){
   for(let i = 0, len = nums.length; i < len; i++){
       for(let j = i + 1; j < len; j++){
           if(nums[i]+nums[j] === target){
               return [i,j]
           }
       }
   }
}